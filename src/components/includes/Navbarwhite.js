import React from "react";
import { Link } from "react-router-dom";
import logoblack from "../Images/logo/blacklogo.svg";

function Navbar() {
  return (
    <>
      <nav
        className="navbar position-absolut border-bottom border-dark fixed-to w-100 pt-lg-5"
        style={{ zIndex: 100 }}
      >
        <div className="container pt-3">
          <Link className="navbar-brand" to="/">
            <img src={logoblack} alt="SEWELO PARIS" width="150" height="" />
          </Link>
          {/* <Link className="navbar-brand" to="Aboutus">About</Link>
    <Link className="navbar-brand" to="Contactus">Contact</Link> */}
          <i
            id="abcd"
            onClick={openNav}
            type="button"
            className="h1 bi bi-list"
          ></i>
        </div>
      </nav>

      <div id="mySidenav" className="sidenav">
        {" "}
        <Link className="closebtn text-white" onClick={closeNav}>
          &times;
        </Link>
        <ul>
          <Link style={{ textDecoration: "none" }} to="">
            {" "}
            FRAGRANCE COLLECTIONS{" "}
          </Link>
          <ul>
            <Link to="../product">MARQUIS</Link>
            <Link to="">ASSCHER</Link>

            <Link to="">BAUGUTTE</Link>
          </ul>

          <Link to="../MensAccessories">MEN'S ACCESSORIES</Link>

          <Link to="../WomensBags">WOMEN'S BAGS</Link>

          <Link to="">BOUTIQUE</Link>

          <Link to="../Ourstory">OUR STORY</Link>

          <Link to="../Openingsoon">CONTACT US</Link>
        </ul>
      </div>

      <div id="overlay" onClick={closeNav}></div>
    </>
  );
}

export default Navbar;

function overlay(isShow) {
  var elm = document.getElementById("overlay");
  if (isShow) {
    elm.style.display = "block";
  } else {
    elm.style.display = "none";
  }
}

function openNav() {
  overlay(true);
  document.getElementById("mySidenav").style.right = "0px";
}

function closeNav() {
  overlay(false);
  document.getElementById("mySidenav").style.right = "-100%";
}
