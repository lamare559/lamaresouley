import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import PhotoFour from "../../img/Group 23.svg";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Contact.css";

function Contact() {
  const [success, setSuccess] = useState();
  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_17bxkan",
        "template_gv47r7j",
        e.target,
        "user_wBooubwqKDpGxWmSfj0Nb"
      )
      .then(
        (result) => {
          setSuccess("Message sent!!");
          setShow(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <Navigation />
      <Container fluid className="px-5 pt-5">
        <Row>
          <Col data-aos="fade-in" xl={6} lg={6}>
            <img
              src={PhotoFour}
              alt="background"
              className="img-fluid contact-img d-block mx-auto"
            />
          </Col>
          <Col data-aos="fade-in" xl={6} lg={6}>
            <h1 className="contact__title text-center">Contact Me</h1>
            <Alert
              show={show}
              variant="success"
              onClose={() => setShow(false)}
              dismissible
            >
              <Alert.Heading>{success}</Alert.Heading>
            </Alert>
            <Form onSubmit={sendEmail}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  row={3}
                  placeholder="Message"
                  name="message"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="submit"
                  value="Send"
                  className="contact__button btn btn-block"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
