import React from "react";
import { Route } from "react-router";
import Home from "./components/layouts/Home";
import Projects from "./components/layouts/Projects";
import Experience from "./components/layouts/Experience";
import Education from "./components/layouts/Education";
import Contact from "./components/layouts/Contact";

function App() {
  return (
    <>
      <Route component={Home} exact={true} path="/lamaresouley" />
      <Route component={Projects} path="/lamaresouley/my-projects" />
      <Route component={Experience} path="/lamaresouley/experience" />
      <Route component={Education} path="/lamaresouley/education" />
      <Route component={Contact} path="/lamaresouley/contact" />
    </>
  );
}

export default App;
