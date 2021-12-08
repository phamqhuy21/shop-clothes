/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavTop from "../components/NavTop";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <div id="wrapper" className="container">
        <NavTop />
        {children}

        <Footer />
      </div>
    </>
  );
}
