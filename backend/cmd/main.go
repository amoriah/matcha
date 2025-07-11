package main

import "matcha/internal/app"

func main() {
	server := app.New()

	server.Start()
}
