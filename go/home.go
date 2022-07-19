package main

import (
	"html/template"
	"net/http"
)

type post struct {
	Headline string
	Text     string
	Image    string
}

func main() {

	postt := post{"The Blow Out",
		"“De Palma has been learning how to make every move of the camera signify" +
			"just what he wants it to, and now he has that knowledge at his fingertips. " +
			"The pyrotechnics and the whirlybird camera are no longer saying \"Look at me;\" " +
			"they give the film authority.” First published in the July 27, 1981, issue of The New Yorker," +
			"long-time Brian De Palma supporter Pauline Kael’s review of Blow Out,praised the director and " +
			"his cast—“Travolta finally has a role that allows him to discard his teenage strutting and his slobby " +
			"accents”—for at long last finding his and their sweet spots. The review is available in Criterion’s" +
			"packaging of the genre-bending thriller-cum-melodrama, and is worth reading for no other reason than " +
			"to re-experience Kael’s capacity to pair snarky jabs with eulogizing hurrahs.  —The Sound and the Fury: " +
			"Blow Out is Back Brian De Palma discusses the production history of Blow Out, its characters, " +
			"how and why certain sequences were shot (for example, the film’s unique prologue), other films he made before " +
			"and after Blow Out… Nancy Allen shared three pics from the set of Brian De Palma’s Blow Out on her Facebook " +
			"page. Allen then added a comment to her post, writing, “Wonderful reunion yesterday with John Travolta," +
			"Vilmos Zsigmond and Paul Hirsch. We were filming part of a documentary about the extraordinary talent and " +
			"career of Vilmos Zsigmond.” A Split Focus Diopter is half convex glass that attaches in front of the camera’s" +
			"main lens to make half the lens nearsighted. The lens can focus on a plane in the background and the diopter on a" +
			"foreground element. In the 1970′s and 1980′s, Brian De Palma championed the use of this tool to enhance the visual and emotional" +
			"experience of his films. The Split Diopter allows for Deep Focus cinematography but requires much less light. It also delivers a distinctive" +
			"look that blends sharp and out-of-focus imagery all in one frame. Subjects in both foreground and background can be kept in focus." ,
		"../css/dePalma.png"}

	templates := template.Must(template.ParseFiles("../html/home.html"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		err := templates.ExecuteTemplate(w, "home.html", postt)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

	})

	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("../css"))))

	http.ListenAndServe(":8080", nil)
}
