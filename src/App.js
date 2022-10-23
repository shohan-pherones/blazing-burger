import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Burgers from "./components/Burgers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/burgers">
          <Burgers />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
