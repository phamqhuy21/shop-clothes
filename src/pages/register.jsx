/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavTop from "../components/NavTop";

export default function register() {
  return (
    <>
      <Header />
      <div id="wrapper" className="container">
        <NavTop />
        <section className="header_text sub">
          <img
            className="pageBanner"
            src="themes/images/pageBanner.png"
            alt="New products"
          />
          <h4>
            <span>Login or Regsiter</span>
          </h4>
        </section>
        <section className="main-content">
          <div className="row">
            <div className="span5">
              <h4 className="title">
                <span className="text">
                  <strong>Login</strong> Form
                </span>
              </h4>
              <form action="#" method="post">
                <input type="hidden" name="next" defaultValue="/" />
                <fieldset>
                  <div className="control-group">
                    <label className="control-label">Username</label>
                    <div className="controls">
                      <input
                        type="text"
                        placeholder="Enter your username"
                        id="username"
                        className="input-xlarge"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Username</label>
                    <div className="controls">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                        className="input-xlarge"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      tabIndex={3}
                      className="btn btn-inverse large"
                      type="submit"
                      defaultValue="Sign into your account"
                    />
                    <hr />
                    <p className="reset">
                      Recover your{" "}
                      <a
                        tabIndex={4}
                        href="#"
                        title="Recover your username or password"
                      >
                        username or password
                      </a>
                    </p>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="span7">
              <h4 className="title">
                <span className="text">
                  <strong>Register</strong> Form
                </span>
              </h4>
              <form action="#" method="post" className="form-stacked">
                <fieldset>
                  <div className="control-group">
                    <label className="control-label">Username</label>
                    <div className="controls">
                      <input
                        type="text"
                        placeholder="Enter your username"
                        className="input-xlarge"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Email address:</label>
                    <div className="controls">
                      <input
                        type="password"
                        placeholder="Enter your email"
                        className="input-xlarge"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Password:</label>
                    <div className="controls">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="input-xlarge"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <p>
                      Now that we know who you are. I'm not a mistake! In a
                      comic, you know how you can tell who the arch-villain's
                      going to be?
                    </p>
                  </div>
                  <hr />
                  <div className="actions">
                    <input
                      tabIndex={9}
                      className="btn btn-inverse large"
                      type="submit"
                      defaultValue="Create your account"
                    />
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
