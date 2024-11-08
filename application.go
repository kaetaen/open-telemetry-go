package main

import (
	"net/http"
)

func main() {
	router := http.NewServeMux()

	router.HandleFunc("GET /anime-list", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte("{\"animes\": [\"anime1\", \"anime2\"]}"))
	})

	http.ListenAndServe(":8080", router)

}
