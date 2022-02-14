/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../const/path";

export default function NavTop() {
  return (
    <section className="navbar main-menu">
      <div className="navbar-inner main-menu">
        <a href="index.html" className="logo pull-left">
          <img src="themes/images/logo.png" className="site_logo" alt />
        </a>
        <nav id="menu" className="pull-right">
          <ul>
            <li>
              <Link to={PATH.PRODUCTS}>All</Link>
              {/* <a href="./products.html">All</a> */}
            </li>
            <li>
              <Link to={PATH.PRODUCTS}>Bag</Link>
              {/* <a href="./products.html">Bag</a> */}
            </li>
            <li>
              <Link to={PATH.PRODUCTS}>Shoe</Link>
              {/* <a href="./products.html">Shoe</a> */}
              {/* <ul>
                <li>
                  <a href="./products.html">Gifts and Tech</a>
                </li>
                <li>
                  <a href="./products.html">Ties and Hats</a>
                </li>
                <li>
                  <a href="./products.html">Cold Weather</a>
                </li>
              </ul> */}
            </li>
            <li>
              <a href="./products.html">Clothes</a>
            </li>
            <li>
              <a href="./products.html">Best Seller</a>
            </li>
            <li>
              <a href="./products.html">Top Seller</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
