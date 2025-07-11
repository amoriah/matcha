package domain

type Users struct {
	Id                string `json:"id"`
	Username          string `json:"username"`
	FirstName         string `json:"first_name"`
	LastName          string `json:"last_name"`
	Email             string `json:"email"`
	Sex               Sex
	SexualPreferences Sex
	Age               uint8    `json:"age"`
	Bio               string   `json:"bio"`
	Tags              []string `json:"tags"`
	Photos            []string `json:"photos"`
	Location          string   `json:"location"`
	Password          string   `json:"password"`
}

type Sex struct {
	Female string `json:"female"`
	Male   string `json:"male"`
}

type Tags struct {
	Tags map[string]struct{} `json:"tags"`
}
