import React, { Component } from "react";
import ScrollableTabsButtonForce from "./components/Navigation/Navigation";
import AboutMe from "./components/AboutMe/AboutMe";
import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import Experience from "./components/Experience/Experience";
import Skill from "./components/Skill/Skill";
import ContactForm from "./components/Contact/Contact";
import "./App.css";
import Section from "./components/section/section.component";
import Footer from "./components/footer/footer";

function App() {
  return (
    <React.Fragment>
      <ScrollableTabsButtonForce />
      <Section>
        <AboutMe />
      </Section>
      <Section bg>
        <ProjectCardList />
      </Section>
      <Section>
        <Experience />
      </Section>
      <Section bg>
        <Skill />
      </Section>
      <Section>
        <ContactForm />
      </Section>

      <Footer />
    </React.Fragment>
  );
}

export default App;
