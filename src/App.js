import React, { Component } from "react";

import LaptopImage from "./img/laptop.jpg";
import ShoppingImage from "./img/shopping.jpg";
import GraphsImage from "./img/graphs.jpg";
import ContactMeImage from "./img/phone-on-table.jpg";

import Config from "./Config";
import ContactForm from "./components/ContactForm";
import ProjectCard from "./components/ProjectCard";

import { Container, Row } from "react-bootstrap";

import {
  Spacer,
  Title,
  ParallaxImage,
  Underline,
  Logo,
  Dot
} from "./components/Helpers";

import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";

export default class App extends Component {
  componentDidMount() {
    AOS.init({
      delay: 100,
      once: true,
      duration: 600
      // disable: 'mobile'
    });
    document.title = `${Config.firstName} ${Config.lastName} - Portfolio`;
  }
  componentDidUpdate() {
    AOS.refresh();
  }
  render() {
    return (
      <div>
        <NavBar />
        <HeroSection />
        <div className="mb-4 container-xl">
          <Spacer height="10vh" />
          <div style={{ minHeight: "95vh" }}>
            <div id="about-me"></div>
            <Title l1="Here's a little bit" l2="About me" />
            <Spacer height="20vh" />

            <AboutMe />

            <Spacer height="25vh" />
            <div className="d-flex justify-content-around">
              <div className="flex-grow-1 d-flex justify-content-center">
                <Dot order={1} anim="fade-right" />
                <Dot order={2} />
                <Dot order={3} anim="fade-left" />
              </div>
            </div>
          </div>

          <div style={{ minHeight: "105vh" }}>
            <Spacer height="15vh" />

            <div id="my-projects"></div>

            <Title l1="These Are" l2="My Projects" />
            <Spacer height="8vh" />

            <Row className="py-5 row-cols-1 row-cols-sm-2 row-cols-lg-3">
              <ProjectCard
                name="My Portfolio"
                link="#landing"
                gitLink="https://github.com"
                techStack={["react", "bootstrap"]}
                image={LaptopImage}
                samePage={true}
              />
              <ProjectCard
                name="E-Commerce"
                link="https://example.com"
                gitLink="https://github.com"
                techStack={["react", "express", "mongodb"]}
                image={ShoppingImage}
              />

              <ProjectCard
                name="Admin Panel"
                link="https://example.com"
                gitLink="https://github.com"
                techStack={["express", "passport", "mysql"]}
                image={GraphsImage}
              />
            </Row>
          </div>
          <Spacer height="8vh" />
        </div>
        <ParallaxImage src={ContactMeImage} />
        <div id="contact-me"></div>
        <Title l1="Interested? You can" l2="Contact me" />

        <div className="container-lg" data-aos="fade-down" data-aos-delay="500">
          <ContactForm />
        </div>
        <Spacer height="15vh" />

        <Container fluid className="text-center mb-4" data-aos="zoom-in">
          <h1
            onClick={() => window.scrollTo(0, 0)}
            style={{ cursor: "pointer" }}
          >
            <Logo />
            <Underline />
          </h1>
        </Container>
        <Spacer height="10vh" />

        <footer className="text-center bg-light" style={{ padding: "20px" }}>
          <Container>
            Copyright © 2020 {Config.firstName} {Config.lastName}
          </Container>
        </footer>
      </div>
    );
  }
}
