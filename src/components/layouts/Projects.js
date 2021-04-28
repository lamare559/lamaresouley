import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import Estate from "../../img/4273991.png";
import Radio from "../../img/5619.png";
import Blog from "../../img/3125988.png";
import Todo from "../../img/28518.png";
import TV from "../../img/59884.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <Navigation />
      <Container className="pt-5">
        <Row>
          <Col data-aos="fade-down" xl={4} lg={4} className="pb-md-3 pb-sm-3">
            <div className="project__content">
              <div className="project__content-overlay"></div>
              <img src={Estate} alt="" className="project__img img-fluid" />
              <div className="project__content-details fadeIn-top">
                <h3 className="project__content-title text-capitalize">
                  online estate rental
                </h3>
                <p className="project__content-description">
                  ReactJs, Firebase
                </p>
                <Button className="button-outline">
                  <a
                    href="https://homing-8ce95.web.app"
                    className="project__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </Button>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-down" xl={4} lg={4} className="pb-md-3 pb-sm-3">
            <div className="project__content">
              <div className="project__content-overlay"></div>
              <img src={Radio} alt="" className="project__img img-fluid" />
              <div className="project__content-details fadeIn-top">
                <h3 className="project__content-title text-downpercase">
                  monsiteradio
                </h3>
                <p className="project__content-description">
                  HTML, CSS, Bootstrap, CodeIgniter
                </p>
                <Button className="button-outline">
                  <a
                    href="https://webradio.me/webradiopro/accueil/inscription"
                    className="project__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </Button>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-down" xl={4} lg={4} className="pb-md-3 pb-sm-3">
            <div className="project__content">
              <div className="project__content-overlay"></div>
              <img src={Blog} alt="" className="project__img img-fluid" />
              <div className="project__content-details fadeIn-top">
                <h3 className="project__content-title text-capitalize">
                  blogpost system
                </h3>
                <p className="project__content-description">
                  HTML, CSS, Bootstrap, CodeIgniter
                </p>
                <Button className="button-outline">
                  <a
                    href="https://github.com/lamare559/postee"
                    className="project__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col data-aos="fade-down" xl={4} lg={4} className="pb-md-3 pb-sm-3">
            <div className="project__content">
              <div className="project__content-overlay"></div>
              <img src={Todo} alt="" className="project__img img-fluid" />
              <div className="project__content-details fadeIn-top">
                <h3 className="project__content-title text-capitalize">
                  todo list
                </h3>
                <p className="project__content-description">ReactJs</p>
                <Button className="button-outline">
                  <a
                    href="https://github.com/lamare559/my-app"
                    className="project__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </Button>
              </div>
            </div>
          </Col>
          <Col data-aos="fade-down" xl={4} lg={4} className="pb-md-3 pb-sm-3">
            <div className="project__content">
              <div className="project__content-overlay"></div>
              <img src={TV} alt="" className="project__img img-fluid" />
              <div className="project__content-details fadeIn-top">
                <h3 className="project__content-title text-capitalize">
                  tv series list
                </h3>
                <p className="project__content-description">ReactJs</p>
                <Button className="button-outline">
                  <a
                    href="https://github.com/lamare559/tvseries"
                    className="project__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
