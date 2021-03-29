import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";

export class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
