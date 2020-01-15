import React, { Component } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import Config from "./../Config";
import Particles from "react-particles-js";

import particleConfig from "../particlejsConfig.json";

export default class HeroSection extends Component {
  render() {
    return (
      <Jumbotron
        fluid
        className="d-flex align-items-center main-hero"
        style={{ backgroundColor: Config.accentColor }}
        id="landing"
      >
        <Particles
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vh",
            height: "100vh",
            zIndex: "2"
          }}
          params={particleConfig}
        />
        <Container
          className="text-center"
          style={{ zIndex: "3", pointerEvents: "none" }}
        >
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
}
