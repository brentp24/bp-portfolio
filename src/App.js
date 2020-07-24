import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About.js";
import Portfolio from "./Pages/Portfolio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <NavBar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Wrapper>
      <Footer />
    </Router>
  )
}

export default App;
