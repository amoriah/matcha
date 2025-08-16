package utils

import (
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
	"strconv"
	"time"

	"github.com/go-mail/mail"
	"github.com/k3a/html2text"
)

// EmailData содержит данные для отправки email
type EmailData struct {
	URL       string
	FirstName string
	Subject   string
}

// SendEmail отправляет email
func SendEmail(to string, data *EmailData, template string) error {
	from := os.Getenv("EMAIL_FROM")
	smtpHost := os.Getenv("SMTP_HOST")
	smtpUser := os.Getenv("SMTP_USER")
	smtpPass := os.Getenv("SMTP_PASS")
	smtpPort, errPort := strconv.Atoi(os.Getenv("SMTP_PORT"))
	if errPort != nil {
		log.Println(errPort)
		return fmt.Errorf("%w", errPort)
	}
	log.Println("env: ", smtpHost, smtpUser, smtpPass, smtpPort, from)

	// Создаем HTML шаблон письма
	body, err := ParseTemplateDir("templates")
	//log.Println("body: ", body)
	if err != nil {
		log.Println(err)
		return fmt.Errorf("%w", err)
	}

	// Создаем новое сообщение
	m := mail.NewMessage()
	m.SetHeader("From", from)
	m.SetHeader("To", to)
	m.SetHeader("Subject", data.Subject)

	m.AddAlternativeWriter("text/plain", func(w io.Writer) error {
		_, err := w.Write([]byte(html2text.HTML2Text(body)))
		return fmt.Errorf("%w", err)
	})

	m.AddAlternative("text/html", body)

	// Настраиваем SMTP клиент
	d := mail.NewDialer(smtpHost, smtpPort, smtpUser, smtpPass)
	d.Timeout = 10 * time.Second
	log.Println("m is:", m)
	// Отправляем письмо
	if err := d.DialAndSend(m); err != nil {
		log.Println("Dialer: ", err)
		return fmt.Errorf("%w", err)
	}
	log.Println("after Dialer: ", err)

	return nil
}

func ParseTemplateDir(dir string) (string, error) {
	// Читаем конкретный файл шаблона
	content, err := os.ReadFile(filepath.Join(dir, "email_verification.html"))
	if err != nil {
		return "", err
	}

	return string(content), nil
}
