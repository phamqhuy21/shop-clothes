/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { PATH } from "../const/path";
import { login } from "../apis/account.api";

export default function index() {
  let navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      toast.loading("Processing login...");
      let res = await login(data);
      if (res.status === 201 && res?.data?.statusCode === 200) {
        toast.remove();
        toast.success("Login success");
        localStorage.setItem("jwt_shop", res?.data?.data?.accessToken);
        navigate(PATH.PRODUCTS);
      } else {
        toast.remove();
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <>
      <Layout>
        <section className="header_text sub">
          <img
            className="pageBanner"
            src="themes/images/pageBanner.png"
            alt="New products"
          />
          <h4>
            <span>Login</span>
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
              <form
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  let dataReq = {
                    email: e.target["email"]?.value,
                    password: e.target["password"]?.value,
                  };
                  handleLogin(dataReq);
                }}
              >
                {/* <input type="hidden" name="next" defaultValue="/" /> */}
                <fieldset>
                  <div className="control-group">
                    <label className="control-label">Email</label>
                    <div className="controls">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                        id="username"
                        className="input-xlarge"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Password</label>
                    <div className="controls">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
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
                      You don't have an account. Please{" "}
                      <Link to={PATH.REGISTER}>register here</Link>
                    </p>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
