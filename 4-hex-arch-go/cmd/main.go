package main

import (
	"log"
	"os"

	"hex-arch-app/internal/adapters/app/api"
	"hex-arch-app/internal/adapters/core/arithmetic"
	"hex-arch-app/internal/adapters/framework/right/db"
	"hex-arch-app/internal/ports"

	gRPC "hex-arch-app/internal/adapters/framework/left/grpc"
)

func main() {
	var err error

	// ports
	var dbaseAdapter ports.DbPort
	var core ports.ArithmeticPort
	var appAdapter ports.APIPort
	var gRPCAdapter ports.GRPCPort

	dbaseDriver := os.Getenv("DB_DRIVER")
	dsourceName := os.Getenv("DS_NAME")

	dbaseAdapter, err = db.NewAdapter(dbaseDriver, dsourceName)
	if err != nil {
		log.Fatalf("failed to initiate dbase connection: %v", err)
	}

	defer dbaseAdapter.CloseDbConnection()

	core = arithmetic.NewAdapter()

	appAdapter = api.NewAdapter(dbaseAdapter, core)

	gRPCAdapter = gRPC.NewAdapter(appAdapter)
	gRPCAdapter.Run()

}
