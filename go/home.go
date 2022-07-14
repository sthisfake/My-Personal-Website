package main

import (
	"html/template"
	"net/http"
)

type Welcome struct {
	Name string
	Time string
}

func main() {

	http.HandleFunc("/", HomePage)

	http.Handle("/css/",  http.StripPrefix("/css/", http.FileServer(http.Dir("../css"))))

	http.ListenAndServe(":8080", nil)
}

func HomePage(w http.ResponseWriter, r *http.Request){

	t , _:= template.ParseFiles("../html/home.html") //parse the html file homepage.html
	t.Execute(w, nil) //execute the template and pass it the HomePageVars struct to fill in the gaps

}


