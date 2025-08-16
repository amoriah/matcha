package main

import (
	"github.com/joho/godotenv"
	"log"
	"matcha/internal/app"
)

func main() {
	server := app.New()

	// Загружаем переменные из файла .env в окружение
	err := godotenv.Load()
	if err != nil {
		log.Println("Файл .env не найден или ошибка при загрузке")
		log.Fatalf(err.Error())
	}

	server.Start()
}
