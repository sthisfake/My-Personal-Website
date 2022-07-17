package main

import (
	"html/template"
	"net/http"
)

type post struct {
	Headline string
	Text string
	Image string
}

func main() {

	postt:= post{"The Blow Out" ,
		"“De Palma has been learning how to make every move of the camera signify" +
		" just what\n            he wants it to, and now he has that knowledge at his fingertips. " +
		"The pyrotechnics and the whirlybird\n            camera are no longer saying \"Look at me;\" " +
		"they give the film authority.” First published in the July\n            27, 1981, issue of The New Yorker," +
		" long-time Brian De Palma supporter Pauline Kael’s review of Blow Out,\n            praised the director and " +
		"his cast—“Travolta finally has a role that allows him to discard his teenage\n            strutting and his slobby " +
		"accents”—for at long last finding his and their sweet spots. The review is\n            available in Criterion’s" +
		" packaging of the genre-bending thriller-cum-melodrama, and is worth reading\n            for no other reason than " +
		"to re-experience Kael’s capacity to pair snarky jabs with eulogizing hurrahs.\n            —The Sound and the Fury: " +
		"Blow Out is Back\n            Brian De Palma discusses the production history of Blow Out,\n            its characters, " +
		"how and why certain sequences were shot (for example, the film’s unique prologue),\n            other films he made before " +
		"and after Blow Out…\n            Nancy Allen shared three pics from the set of Brian De Palma’s Blow Out on her Facebook " +
		"page. Allen then added a comment to her post, writing,\n            “Wonderful reunion yesterday with John Travolta,\n   " +
		"         Vilmos Zsigmond and Paul Hirsch. We were filming part of a documentary about the extraordinary talent and\n        " +
		"    career of Vilmos Zsigmond.”\n            A Split Focus Diopter is half convex glass that attaches in front of the camera’s" +
		" main lens to make half the lens\n            nearsighted. The lens can focus on a plane in the background and the diopter on a" +
		" foreground element. In the 1970′s and 1980′s, Brian De Palma\n            championed the use of this tool to enhance the visual and emotional " +
		"experience of his films. The Split Diopter allows for Deep Focus cinematography but\n            requires much less light. It also delivers a distinctive " +
		"look that blends sharp and out-of-focus imagery all in one frame. Subjects in both foreground\n            and background can be kept in focus." +
		" In the video below are all 15 S plit Diopter shots from Brian De Palma’s film Blow Out, courtesy of Vashi Nedomansky.\n          " +
		"  A stylish American thriller knee-deep in paranoia, Brian De Palma’s Blow Out is a neatly packed, thrill-ridden film executed on\n         " +
		"   a level far beyond average filmmaking. The story of a sound man working on a sleazy exploitation horror, who accidentally catches a recording of what his\n     " +
		"       gut is telling him is a covered-up murder, offers the star of Pulp Fiction and Grease an opportunity to shine in all his talent. And what talent it is." +
		" Not only does Travolta give what is\n            probably his finest performance, he does it in a film that we remember as solid proof of De Palma’s utter brilliance." +
		" Patiently building the tension, relying on a truly wonderful script, on the legendary\n            Vilmos Zsigmond’s phenomenal photography, on impressive acting by " +
		"the protagonist as well as John Lithgow and Nancy Allen, wisely steering clear from underestimating the audience at any point, De Palma\n            creates an ambiance so " +
		"nerve-shattering, a ride so downright exciting that, as we observe how the plot develops on the screen, we can’t help feeling a part of the conspiracy ourselves, terrified and " +
		"adrenaline-pumped\n            at the same time. We’re talking about a classic of the eighties, a film Travolta himself called one of his top three favorites, a thriller that " +
		"stands among the very best conspiracy movies Hollywood has ever produced.",
		"../css/dePalma.png"}

	templates := template.Must(template.ParseFiles("../html/home.html"))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

		if err := templates.ExecuteTemplate(w, "home.html",postt); err!=nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

	})

	http.Handle("/css/",  http.StripPrefix("/css/", http.FileServer(http.Dir("../css"))))

	http.ListenAndServe(":8080", nil)
}



