/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../const/path";

export default function Header() {
  return (
    <div id="top-bar" className="container">
      <div className="row">
        <div className="span4">
          <form method="POST" className="search_form">
            <input
              type="text"
              className="input-block-level search-query"
              placeholder="eg. T-sirt"
            />
          </form>
        </div>
        <div className="span8">
          <div className="account pull-right">
            <ul className="user-menu">
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <Link to={PATH.CART}>Your Cart</Link>
              </li>
              <li>
                <Link to={PATH.CHECKOUT}>Checkout</Link>
              </li>
              <li>
                <Link to={PATH.REGISTER}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
