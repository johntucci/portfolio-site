import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Config from "./../Config";

export default function HeroSection() {
  return (
    <Jumbotron
      fluid
      className="d-flex align-items-center main-hero"
      style={{ backgroundColor: Config.accentColor }}
      id="landing"
    >
      <Container className="text-center">
        <span>
          <span className="font-weight-bold" data-aos="fade-up">
            Hello.
          </span>
          <br />
          <span
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="600"
          >
            You can call me {Config.firstName}
          </span>
        </span>
      </Container>
    </Jumbotron>
  );
}
