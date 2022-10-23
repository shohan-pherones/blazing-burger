import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Burgers from "./components/Burgers";
import Footer from "./components/Footer";
import Burger from "./components/Burger";

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
        <Route path="/burger/:id">
          <Burger />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
