import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import HTML from "../../img/Icon awesome-html5.svg";
import CSS from "../../img/Icon awesome-css3-alt.svg";
import JAVASCRIPT from "../../img/Icon simple-javascript.svg";
import BOOTSTRAP from "../../img/Icon awesome-bootstrap.svg";
import REACT from "../../img/Icon awesome-react.svg";
import PHP from "../../img/Icon simple-php.svg";
import CODEIGNITER from "../../img/Icon simple-codeigniter.svg";
import ADOBEXD from "../../img/Icon simple-adobexd.svg";
import FIREBASE from "../../img/Icon simple-firebase.svg";
import { Link } from "react-router-dom";
import PhotoOne from "../../img/Group-1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <Navigation />
      <Container fluid className="pt-4 px-5">
        <Row>
          <Col data-aos="fade-in" xl={6} lg={6} className="pb-md-5 pb-sm-5">
            <h1 className="home__header text-uppercase">i'm souleymane</h1>
            <h5 className="home__subheader text-justify pt-3">
              Software Engineer - Front-End Focused
            </h5>
            <div className="home__description text-justify pt-3">
              Focusing actually on UI/UX development. Develop websites (landing
              pages). Know little of back-end development. Do little of web
              design and logo creation
            </div>
            <div className="home__skills pt-4">
              <h5 className="home__major text-capitalize pb-2">major skills</h5>
              <div className="home__skills-icon">
                <span className="mr-5 icons">
                  <img src={HTML} alt="html-logo" className="logos" />
                </span>
                <span className="mr-5 icons">
                  <img src={CSS} alt="css-logo" className="logos" />
                </span>
                <span className="mr-5 icons">
                  <img
                    src={JAVASCRIPT}
                    alt="javascript-logo"
                    className="logos"
                  />
                </span>
                <span className="mr-5 icons">
                  <img src={BOOTSTRAP} alt="bootstrap-logo" className="logos" />
                </span>
                <span className="mr-5 icons">
                  <img src={REACT} alt="react-logo" className="logos" />
                </span>
              </div>
            </div>
            <div className="home__other-skills pt-4">
              <h5 className="home__others text-capitalize pb-2">others</h5>
              <div className="d-sm-flex">
                <span className="mr-5 icons">
                  <img src={PHP} alt="php-logo" className="logos" />
                </span>
                <span className="mr-5 icons">
                  <img
                    src={CODEIGNITER}
                    alt="codeigniter-logo"
                    className="logos"
                  />
                </span>
                <span className="mr-5 icons">
                  <img src={ADOBEXD} alt="adobexd-logo" className="logos" />
                </span>
                <span className="mr-5 icons">
                  <img src={FIREBASE} alt="firebase-logo" className="logos" />
                </span>
              </div>
            </div>
            <div className="home__button-groups d-sm-flex flex-sm-row pt-5">
              <Button className="buttons mr-3 mb-sm-3">
                <Link className="button-link" to="/lamaresouley/my-projects">
                  My Projects
                </Link>
              </Button>
              <Button className="buttons mb-sm-4">
                <Link className="button-link" to="/lamaresouley/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </Col>
          <Col data-aos="fade-in" xl={6} lg={6}>
            <img src={PhotoOne} alt="background" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
