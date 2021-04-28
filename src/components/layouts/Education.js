import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import PhotoThree from "../../img/Group 19.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Education.css";

function Education() {
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
            <div className="education__content">
              <h1 className="education__title text-capitalize text-center pb-4">
                education
              </h1>
              <div className="education__details pb-3">
                <h4 className="education__school text-uppercase">
                  HIGHER INSTITUTE OF MANAGEMENT AND ENTREPRENEURSHIP, DOUALA
                </h4>
                <p className="education__date">October, 2019 - October, 2020</p>
                <p className="education__description">
                  PROFESSIONAL BACHELOR DEGREE IN SOFTWARE ENGINEERING
                </p>
              </div>
              <div className="education__details pb-3">
                <h4 className="education__school text-uppercase">
                  HIGHER INSTITUTE OF MANAGEMENT AND ENTREPRENEURSHIP, DOUALA
                </h4>
                <p className="education__date">October, 2017 - July, 2019</p>
                <p className="education__description">
                  HIGHER NATIONAL DIPLOMA IN SOFTWARE ENGINEERING
                </p>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-down" xl={6} lg={6}>
            <img src={PhotoThree} alt="background" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Education;
