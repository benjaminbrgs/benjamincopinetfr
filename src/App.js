import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.cmp";
import AboutPage from "./pages/about/about.cmp";
import ContactPage from "./pages/contact/contact.cmp";
import HomePage from "./pages/homepage/homepage.cmp";
import PortfolioPage from "./pages/portfolio/portfolio.cmp";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <HomePage handleClick={this.handleClick} />}
          />
          <Route exact path="/portfolio/:slug" component={PortfolioPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
