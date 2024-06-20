package main

import (
	"bytes"
	"compress/gzip"
	"fmt"
	"net"
	"os"
	"strings"
)

func handleConnection(conn net.Conn) {
	defer conn.Close()

	buf := make([]byte, 1024)

	conn.Read(buf)

	req := string(buf)
	rawPath := strings.Split(req, "\r\n")[0]
	path := strings.TrimSpace(rawPath)
	path = strings.Split(path, " ")[1]

	requestType := strings.Split(rawPath, " ")[0]

	var pathUA string
	var pathAE string
	headers := strings.Split(req, "\r\n")
	for _, header := range headers {
		if strings.HasPrefix(header, "User-Agent:") {
			uaParts := strings.SplitN(header, ":", 2)
			pathUA = strings.TrimSpace(uaParts[1])
		}

		if strings.HasPrefix(header, "Accept-Encoding:") {
			aeParts := strings.SplitN(header, ":", 2)
			pathAE = strings.TrimSpace(aeParts[1])
		}
	}

	response := ""

	if strings.HasPrefix(req, "GET / HTTP") {
		response = "HTTP/1.1 200 OK\r\n\r\n"
	} else if strings.Contains(req, "/echo/") {
		echo := strings.TrimPrefix(path, "/echo/")
		acceptedEncoding := ""
		if pathAE == "gzip" || strings.HasPrefix(pathAE, "gzip, ") || strings.HasSuffix(pathAE, ", gzip") || strings.Contains(pathAE, ", gzip,") {
			var b bytes.Buffer
			gzipWriter := gzip.NewWriter(&b)
			gzipWriter.Write([]byte(echo))
			gzipWriter.Close()
			acceptedEncoding = fmt.Sprintf("Content-Encoding: %s\r\n", "gzip")

			response = fmt.Sprintf("HTTP/1.1 200 OK\r\n%sContent-Type: text/plain\r\nContent-Length: %d\r\n\r\n%s", acceptedEncoding, b.Len(), b.Bytes())
		} else {
			response = fmt.Sprintf("HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: %d\r\n\r\n%s", len(echo), echo)
		}
	} else if strings.Contains(req, "/user-agent") && pathUA != "" {
		response = fmt.Sprintf("HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: %d\r\n\r\n%s", len(pathUA), pathUA)
	} else if strings.Contains(req, "/files/") && requestType == "GET" {
		dir := os.Args[2]
		fileName := strings.TrimPrefix(path, "/files/")
		data, err := os.ReadFile(dir + fileName)
		if err != nil {
			response = "HTTP/1.1 404 Not Found\r\n\r\n"
		} else {
			response = fmt.Sprintf("HTTP/1.1 200 OK\r\nContent-Type: application/octet-stream\r\nContent-Length: %d\r\n\r\n%s", len(data), data)
		}
	} else if strings.Contains(req, "/files/") && requestType == "POST" {
		dir := os.Args[2]
		fileName := strings.Split(rawPath, " ")[1]
		fileName = strings.Split(fileName, "/")[2]

		file, err := os.Create(dir + fileName)
		if err != nil {
			response = "HTTP/1.1 500 Internal Server Error\r\n\r\n"
		}

		body := strings.Split(req, "\r\n\r\n")[1]
		body = strings.Trim(body, "\x00")
		fmt.Print(body)
		file.Write([]byte(body))

		response = "HTTP/1.1 201 Created\r\n\r\n"
	} else {
		response = "HTTP/1.1 404 Not Found\r\n\r\n"
	}

	conn.Write([]byte(response))
}

func main() {

	l, err := net.Listen("tcp", "0.0.0.0:4221")
	if err != nil {
		fmt.Println("Failed to bind to port 4221")
		os.Exit(1)
	}

	for {
		conn, err := l.Accept()
		if err != nil {
			fmt.Println("Error accepting connection: ", err.Error())
			os.Exit(1)
		}

		go handleConnection(conn)
	}
}
