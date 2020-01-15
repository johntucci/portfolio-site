import React from "react";
import { Col, Button } from "react-bootstrap";

export default function ContactForm() {
  return (
    <form name="contact" method="post" className="form-horizontal mb-5">
      <fieldset>
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-group" data-aos="fade-right" data-aos-delay="200">
          <label className="col control-label" htmlFor="textinput">
            Name
          </label>
          <div className="col">
            <input
              id="fullName"
              name="name"
              type="text"
              placeholder="Your full name"
              className="form-control input-md"
            />
          </div>
        </div>

        <div className="form-group" data-aos="fade-left" data-aos-delay="150">
          <label className="col control-label" htmlFor="textinput">
            Email
          </label>
          <div className="col">
            <input
              id="emailAddress"
              name="email"
              type="text"
              placeholder="Your email address"
              className="form-control input-md"
            />
          </div>
        </div>

        <div className="form-group" data-aos="fade-in" data-aos-delay="700">
          <label className="col control-label" htmlFor="textarea">
            Message
          </label>
          <div className="col">
            <textarea
              className="form-control"
              id="messageContent"
              name="message"
              style={{ minHeight: "12rem" }}
            ></textarea>
          </div>
        </div>

        <div className="form-group" data-aos="zoom-in" data-aos-delay="200">
          <Col>
            <Button size="lg" type="submit" style={{ width: "100%" }}>
              <i
                className="lab la-telegram-plane"
                data-aos="flip-right"
                data-aos-delay="700"
                style={{ marginRight: ".5rem" }}
              ></i>
              Submit
            </Button>
          </Col>
        </div>
      </fieldset>
    </form>
  );
}
