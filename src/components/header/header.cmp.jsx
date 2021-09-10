import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/nav/nav.cmp";
import BurgetButoon from "../burger/burger.cmp";
import "./header.scss";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      nav: false,
    };
  }

  buttonToggle = () => {
    this.setState((prevstate) => {
      return { nav: !prevstate.nav };
    });
  };

  render() {
    return (
      <div className="header">
        <Link className="logo" to="/">
          <div className="logo-title">BENJAMIN</div>
          <div className="logo-line"></div>
          <div className="logo-title">COPINET</div>
        </Link>
        <BurgetButoon toggle={this.buttonToggle} nav={this.state.nav} />
        <Nav toggle={this.buttonToggle} nav={this.state.nav} />
      </div>
    );
  }
}
export default Header;
