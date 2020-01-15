import React from "react";
import { Container } from "react-bootstrap";

import Config from "../Config";

function ParallaxImage(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.src})`,
        height: "38vh",
        width: "100%",

        backgroundAttachment: "fixed",
        // backgroundPosition: 'center',
        backgroundRepeat: props.repeat ? "repeat" : "no-repeat",
        backgroundSize: "cover"
      }}
    />
  );
}
function Title(props) {
  return (
    <div className="my-5" data-aos="fade-up">
      <Container fluid className="text-center">
        <h2 className="text-capitalize" style={{ fontSize: "1.5rem" }}>
          {props.l1}
        </h2>
        <h2 className="text-uppercase font-weight-bold">{props.l2}</h2>
        <Underline accentColor />
      </Container>
    </div>
  );
}
function Underline() {
  const { accentColor } = Config;
  return (
    <div
      style={{
        width: "6rem",
        height: "0.2rem",
        background: accentColor,
        margin: "0.5rem auto"
      }}
    />
  );
}

function Dot(props) {
  const even = {
    background: "#fff"
  };
  const odd = {
    background: Config.accentColor
  };
  return (
    <div
      style={{
        width: "4rem",
        height: "4rem",
        borderRadius: "100%",
        ...(props.order % 2 === 0 ? even : odd)
      }}
      className="m-4 shadow"
      data-aos={props.anim ? props.anim : "zoom-in"}
      data-aos-delay={200 * props.order}
    />
  );
}

function Logo() {
  const { accentColor, firstName, lastName } = Config;

  return (
    <span className="logo">
      &lt;{" "}
      <span style={{ color: accentColor }}>
        {firstName} {lastName}
      </span>{" "}
      /&gt;
    </span>
  );
}

function Spacer({ height = "6rem" }) {
  return (
    <div
      style={{
        width: "100%",
        height: height
      }}
    />
  );
}

export { ParallaxImage, Title, Underline, Logo, Spacer, Dot };
