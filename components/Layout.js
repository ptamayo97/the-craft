import React, { Component, Fragment } from "react";
import { Head } from "next/head";
import "../styles/Home.module.css";
import NavBar from "./NavBar";

export class Layout extends Component {
  render() {
    const styles = {
      background: "#011724",
    };
    return (
      <div style={styles}>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
