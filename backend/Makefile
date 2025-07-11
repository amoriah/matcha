.PHONY: all clean fclean re

# Имя бинарника
BINARY=matcha

# Основные цели
build:
	go build -o bin/$(BINARY) cmd/main.go

run:
	go run cmd/main.go

test:
	go test ./...

clean:
	rm -rf bin/$(BINARY)

# Кросс-компиляция для разных платформ
build-linux:
	GOOS=linux GOARCH=amd64 go build -o bin/$(BINARY)-linux cmd/main.go

build-windows:
	GOOS=windows GOARCH=amd64 go build -o bin/$(BINARY)-windows.exe cmd/main.go

build-mac:
	GOOS=darwin GOARCH=amd64 go build -o bin/$(BINARY)-mac cmd/main.go
