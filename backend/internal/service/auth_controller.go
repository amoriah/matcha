package utils

import (
	"context"
	"fmt"
)

func SendVerificationEmail(ctx context.Context, email string, firstName string, token string) error {
	// Генерируем URL для подтверждения
	verifyUrl := "https://ваш-сайт.com/verify-email?token=" + token

	// Подготавливаем данные для письма
	emailData := &EmailData{
		URL:       verifyUrl,
		FirstName: firstName,
		Subject:   "Confirm email",
	}

	// Отправляем письмо
	err := SendEmail(email, emailData, "email_verification.html")
	if err != nil {
		return fmt.Errorf("%w", err)
	}

	return nil
}
