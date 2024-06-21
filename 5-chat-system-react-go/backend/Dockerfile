FROM golang:1.22.4-alpine

EXPOSE 8080

RUN mkdir /app
WORKDIR /app

COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .

RUN go build -o /usr/local/bin/main main.go

CMD ["main"]
