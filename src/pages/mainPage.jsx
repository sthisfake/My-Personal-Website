import React, { Component } from "react";
import Navbar from "../components/navbar";
import FirstPage from "./firstpage";
import SecondPage from "./secondPage";
import { useRef } from "react";
import ThirdPage from "./thirdPage";

function MainPage(props) {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const whichIsclicked = (section) => {
    if (section === "home") {
      scrollToSection(home);
    } else if (section === "about") {
      scrollToSection(about);
    } else {
      scrollToSection(contact);
    }
  };

  return (
    <React.Fragment>
      <Navbar refrence={home} onChange={whichIsclicked} />
      <FirstPage onChange={whichIsclicked} />
      <SecondPage refrence={about} onChange={whichIsclicked} />
      <ThirdPage refrence={contact} />
    </React.Fragment>
  );
}

export default MainPage;
