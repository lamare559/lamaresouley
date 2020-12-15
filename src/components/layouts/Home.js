import React from 'react'
import Picture from '../../img/nls.jpg'
import { Menu, EmailOutlined, Phone } from '@material-ui/icons'
import '../styles/Navbar.css'

/* Multiple Inline Styles */

const pageContent = {
    paddingTop: "80px"
}

const avatar = {
    width: "200px",
    height: "200px"
}

const hOneText = {
    fontSize: "35px",
    fontWeight: "300"
}

const title = {
    fontWeight: "400",
    letterSpacing: "2px",
    fontStyle: "italic"
}


export default function Home() {
    return (
        <>
            <div className="scrollspy" data-spy="scroll" data-target="#navbar" data-offset="50">
                {/* Navbar */}
                <div>
                    <nav id="navbar" className="navbar border-bottom navbar-expand-lg fixed-top">
                        <div className="container">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarText"
                                aria-controls="navbarText"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span
                                    style={{
                                        color: "#de6913",
                                        fontSize: "16px",
                                        fontWeight: "500"
                                    }}
                                    className="navbar-toggler-icon text-white"
                                >
                                    <Menu />
                                </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarText">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="#skills">Skills</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="#experience">Experience</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="#education">Education</a>
                                    </li>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Header */}
                <div
                    id="home"
                    style={{
                        background: "#f5f5f5",
                        height: "100vh",
                        paddingTop: "50px"
                    }}
                >
                    <div className="container">
                        <div style={pageContent} className="header-content d-flex flex-column align-items-center">
                            <img style={avatar} src={Picture} alt="pictureImage" width="100" height="100" className="rounded-circle my-3" />
                            <h3 style={{ fontWeight: "300", letterSpacing: "2px" }}>Hello!! Welcome</h3>
                            <h1 style={hOneText} className="text-center text-uppercase">i'm nsangou lamare souleymane</h1>
                            <h3 style={title}>Software Engineer</h3>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div id="skills" className="container">
                    <h4 className="title text-center text-uppercase py-5">Skills</h4>
                    <div className="skills my-5">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <p className="py-5">
                                    Actually front-end focused, but the main objective is to be fullstack.
                                    Not bad at web design and logo design.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="skill-progressbar py-2">
                                    <span>React</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "45%" }}
                                            aria-valuenow="45"
                                            aria-valuemin="0"
                                            aria-valuemax="100">45%</div>
                                    </div>
                                </div>
                                <div className="skill-progressbar py-2">
                                    <span>Firebase</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "45%" }}
                                            aria-valuenow="45"
                                            aria-valuemin="0"
                                            aria-valuemax="100">45%</div>
                                    </div>
                                </div>
                                <div className="skill-progressbar py-2">
                                    <span>JavaScript</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "60%" }}
                                            aria-valuenow="60"
                                            aria-valuemin="0"
                                            aria-valuemax="100">60%</div>
                                    </div>
                                </div>
                                <div className="skill-progressbar py-2">
                                    <span>PHP</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "60%" }}
                                            aria-valuenow="60"
                                            aria-valuemin="0"
                                            aria-valuemax="100">60%</div>
                                    </div>
                                </div>
                                <div className="skill-progressbar py-2">
                                    <span>CodeIgniter</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "60%" }}
                                            aria-valuenow="60"
                                            aria-valuemin="0"
                                            aria-valuemax="100">60%</div>
                                    </div>
                                </div>
                                <div className="skill-progressbar py-2">
                                    <span>HTML / CSS</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "80%" }}
                                            aria-valuenow="80"
                                            aria-valuemin="0"
                                            aria-valuemax="100">80%</div>
                                    </div>
                                </div>
                                <div className="skill-progressbar py-2">
                                    <span>MySQL</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "60%" }}
                                            aria-valuenow="60"
                                            aria-valuemin="0"
                                            aria-valuemax="100">60%</div>
                                    </div>
                                </div>
                                <div className="skill-progressbar py-2">
                                    <span>Adobe XD</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "50%" }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100">50%</div>
                                    </div>
                                </div>
                                <div className="skill-progressbar py-2">
                                    <span>Gimp</span>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: "50%" }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100">50%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <button className="download btn btn-lg mx-auto">
                            <a className="resume-link" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1QbrxCg_zFcy0d5MpAms2eyAdwtU9hPhA/view">Download Resume</a>
                        </button>
                    </div>
                </div>

                {/* Experience */}
                <div id="experience">
                    <h4 className="title text-center text-uppercase py-5">Experience</h4>
                    <div className="container">
                        <div className="experience my-5">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <h4 className="py-5 text-uppercase" style={title}>may, 2020 - july, 2020</h4>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <h4 className="text-uppercase" style={{ fontWeight: "300", letterSpacing: "2px" }}>Vestaradio</h4>
                                    <h6 className="text-uppercase py-2" style={title}>Software Engineer Intern, Remote</h6>
                                    <p className="py-1" style={{ opacity: "0.8" }}>Redesigned the user interface of their content management system.</p>
                                </div>
                            </div>
                            <div className="row py-5">
                                <div className="col-lg-6 col-md-6">
                                    <h4 className="py-5 text-uppercase" style={title}>july, 2018 - august, 2018</h4>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <h4 className="text-uppercase" style={{ fontWeight: "300", letterSpacing: "2px" }}>CAMEROON NATIONAL SHIPPERS' COUNCIL</h4>
                                    <h6 className="text-uppercase py-2" style={title}>Software Engineer Intern</h6>
                                    <p className="py-1" style={{ opacity: "0.8" }}>
                                        Redesigned the user interface of the web application managing their library.
                                        Assisted on both software/hardware installation and maintenance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio */}
                <div id="portfolio">
                    <h4 className="title text-center text-uppercase py-5">Portfolio</h4>
                    <div className="portfolio my-5">
                        <div className="container">
                            <div className="card-deck px-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 style={{ fontWeight: "300", letterSpacing: "2px" }} className="card-title">Online Estate Rental</h3>
                                        <p className="card-text">Technologies used: <strong>ReactJs, Firebase, Bootstrap</strong></p>
                                        <a target="_blank" rel="noreferrer" className="view-link float-right" href="https://homing-8ce95.web.app/">View</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 style={{ fontWeight: "300", letterSpacing: "2px" }} className="card-title">MONSITERADIO</h3>
                                        <p className="card-text">Technologies used: <strong>CodeIgniter, HTML, CSS, Bootstrap</strong></p>
                                        <a className="view-link float-right" href="https://www.webradio.me/webradiopro/accueil/inscription">View</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 style={{ fontWeight: "300", letterSpacing: "2px" }} className="card-title">BLOGPOST</h3>
                                        <p className="card-text">Technologies used: <strong>CodeIgniter, HTML, CSS, Bootstrap</strong></p>
                                        <a target="_blank" rel="noreferrer" className="view-link float-right" href="https://www.github.com/lamare559/postee">View</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-deck px-2 py-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 style={{ fontWeight: "300", letterSpacing: "2px" }} className="card-title">TODOLIST</h3>
                                        <p className="card-text">Technology used: <strong>ReactJs</strong></p>
                                        <a target="_blank" rel="noreferrer" className="view-link float-right" href="https://github.com/lamare559/my-app">View</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 style={{ fontWeight: "300", letterSpacing: "2px" }} className="card-title">TVSERIESLIST</h3>
                                        <p className="card-text">Technology used: <strong>ReactJs</strong></p>
                                        <a target="_blank" rel="noreferrer" className="view-link float-right" href=" https://github.com/lamare559/tvseries">View</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div id="education">
                    <h4 className="title text-center text-uppercase py-5">Education</h4>
                    <div className="container">
                        <div className="experience my-4">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <h4 className="py-4 text-uppercase" style={title}>october, 2019 - october, 2020</h4>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <h4 className="text-uppercase" style={{ fontWeight: "300", letterSpacing: "2px" }}>
                                        HIGHER INSTITUTE OF MANAGEMENT AND ENTREPRENEURSHIP, Douala
                                    </h4>
                                    <h6 className="text-uppercase py-2" style={title}>
                                        Professional Bachelor Degree in Software Engineering
                                    </h6>
                                </div>
                            </div>
                            <div className="row py-5">
                                <div className="col-lg-6 col-md-6">
                                    <h4 className="py-4 text-uppercase" style={title}>october, 2017 - july, 2019</h4>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <h4 className="text-uppercase" style={{ fontWeight: "300", letterSpacing: "2px" }}>
                                        HIGHER INSTITUTE OF MANAGEMENT AND ENTREPRENEURSHIP, Douala
                                    </h4>
                                    <h6 className="text-uppercase py-2" style={title}>
                                        Higher National Diploma in Software Engineering
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div id="contact">
                    <h4 className="title text-center text-uppercase py-3">Contact</h4>
                    <div className="container">
                        <div className="contact my-1 d-flex flex-column align-items-center">
                            <span className="icon py-2">
                                <EmailOutlined />
                            </span>
                            <span className="info">lamaresouley996@gmail.com</span>
                            <span className="icon py-2">
                                <Phone />
                            </span>
                            <span className="info">+237 698 697 559</span>
                        </div>
                    </div>
                </div>

                {/* Social Profile */}
                <div className="social-profile">
                    <div className="container">
                        <div className="experience my-5">
                            <p className="text-center">
                                <strong>Note:</strong>
                                This site is built with <strong> ReactJs</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
