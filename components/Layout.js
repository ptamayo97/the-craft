import React, { Component, Fragment } from "react";
import "../styles/Home.module.css";
import NavBar from "./NavBar";

export class Layout extends Component {
  render() {
    return (
      <div className="dark mt-5">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
