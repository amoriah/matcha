package app

import (
	"encoding/json"
	"fmt"
	"github.com/google/uuid"
	"log"
	"net/http"
	"net/smtp"
	"regexp"
)

type RegisterRequest struct {
	Email      string
	Username   string
	FirstName  string
	SecondName string
	Password   string // todo:how it realise?
}

type RegisterResponse struct{}

func (s *Server) RegistrationHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

	var req RegisterRequest

	// Парсим JSON тело запроса
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Валидация полей
	if err := s.ValidateRegister(req); err != nil {
		http.Error(w, "Validation error: "+err.Error(), http.StatusBadRequest)
		return
	}

	// Проверка уникальности email
	//if userExists(req.Username) {
	//	http.Error(w, "User already exists", http.StatusBadRequest)
	//	return
	//}

	// Хэширование пароля
	//hashedPassword, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	//if err != nil {
	//	http.Error(w, "Internal server error", http.StatusInternalServerError)
	//	return
	//}

	// Здесь сохранить пользователя с hashedPassword в базу

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("User request for register accepted"))

	// send link for verification
	//
}

func (s *Server) ValidateRegister(req RegisterRequest) error {
	if req.Email == "" {
		return fmt.Errorf("Email is required")
	}

	if !emailValid(req.Email) {
		return fmt.Errorf("Invalid email format")
	}

	if req.Username == "" {
		return fmt.Errorf("Username is required")
	}

	if req.FirstName == "" {
		return fmt.Errorf("FirstName is required")
	}

	if req.SecondName == "" {
		return fmt.Errorf("SecondName is required")
	}

	if req.Password == "" {
		return fmt.Errorf("Password is required")
	}

	return nil
}

func emailValid(email string) bool {
	//if strings.TrimSpace(email) == "" {
	//	return false
	//}
	// Простая проверка email через regexp
	emailRegex := regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)
	if !emailRegex.MatchString(email) {
		return false
	}

	return true
}

func (s *Server) SendLinkConfirmEmail() {
	token := uuid.New().String()

	// Set up authentication information.
	auth := smtp.PlainAuth("", "user@example.com", "password", "mail.example.com")

	// Connect to the server, authenticate, set the sender and recipient,
	// and send the email all in one step.
	to := []string{"recipient@example.net"}
	msg := []byte("To: recipient@example.net\r\n" +
		"Subject: discount Gophers!\r\n" +
		"\r\n" +
		"This is the email body.\r\n")
	err := smtp.SendMail("mail.example.com:25", auth, "sender@example.org", to, msg)
	if err != nil {
		log.Fatal(err)
	}
}
