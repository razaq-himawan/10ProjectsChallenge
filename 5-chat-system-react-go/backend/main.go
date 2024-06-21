package main

import (
	"fmt"
	"log"
	"net/http"
	"realtime-chat-react-go/pkg/websocket"
)

func serverWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("Websocket Endpoint Hit")
	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintf(w, "%+V\n", err)
	}

	client := &websocket.Client{
		Conn: ws,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()

}

func setupRoutes() {
	pool := websocket.NewPool()

	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serverWs(pool, w, r)
	})
}

func main() {
	setupRoutes()
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("failed to serve")
	}
}
