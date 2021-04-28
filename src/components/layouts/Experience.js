import React, { useEffect } from "react";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import PhotoTwo from "../../img/Group 12.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Experience.css";

function Experience() {
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
          <Col data-aos="fade-down" xl={6} lg={6} className="pb-md-5 pb-sm-5">
            <img
              src={PhotoTwo}
              alt="background"
              className="img-fluid pt-5 pr-3"
            />
          </Col>
          <Col data-aos="fade-down" xl={6} lg={6}>
            <div className="experience__content">
              <h1 className="experience__title text-capitalize text-center pb-4">
                my experience
              </h1>
              <div className="experience__details pb-3">
                <h4 className="experience__company text-uppercase">
                  briluce services sarl
                </h4>
                <p className="experience__date">December, 2020 - March, 2021</p>
                <h5 className="experience__job">
                  Front-end Web Developer Intern
                </h5>
                <p className="experience__description">
                  Developed user interfaces
                </p>
              </div>
              <div className="experience__details pb-3">
                <h4 className="experience__company text-uppercase">
                  vestaradio
                </h4>
                <p className="experience__date">May, 2020 - July, 2020</p>
                <h5 className="experience__job">
                  Web Developer Intern, Remote
                </h5>
                <p className="experience__description">
                  Redesigned the user interface of their content management
                  system.
                </p>
              </div>
              <div className="experience__details pb-3">
                <h4 className="experience__company text-uppercase">
                  cameroon national shippers' council
                </h4>
                <p className="experience__date">July, 2018 - August, 2018</p>
                <h5 className="experience__job">Software Engineer Intern</h5>
                <p className="experience__description">
                  Redesigned the user interface of the web application managing
                  their library.
                </p>
                <p className="experience__description">
                  Assisted on both software/hardware installation and
                  maintenance.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experience;
