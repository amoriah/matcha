package app

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"log"
	"net/http"
)

type Server struct {
	router *chi.Mux
	logger *log.Logger
}

func New() Server {
	return Server{}
}

func (s Server) Start() {
	s.router = chi.NewRouter()
	s.router.Use(middleware.Logger) // логирование запросов

	s.router.Post("/register", s.RegistrationHandler)

	http.ListenAndServe(":8080", s.router)
}

// curl -X POST -H "Content-Type: application/json" \
// -d '{"email":"test@example.com","password":"123456", "username":"dfsf", "firstname":"fefef", "secondname":"refef"}' \
// http://localhost:8080/register
