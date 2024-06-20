FROM golang:1.22-alpine

EXPOSE 9000

RUN apk update \
  && apk add --no-cache \
    mysql-client \
    build-base \
    mariadb-connector-c

RUN mkdir /app
WORKDIR /app

COPY go.mod .
COPY go.sum .
RUN go mod download
COPY . .
COPY ./grpc_entrypoint.sh /usr/local/bin/grpc_entrypoint.sh
RUN /bin/chmod +x /usr/local/bin/grpc_entrypoint.sh

RUN go build -o /usr/local/bin/main cmd/main.go

CMD ["main"]
ENTRYPOINT ["grpc_entrypoint.sh"]
