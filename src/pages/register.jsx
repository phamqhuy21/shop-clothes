/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signup } from "../apis/account.api";
import Layout from "../components/Layout";
import { PATH } from "../const/path";

export default function register() {
  let navigate = useNavigate();
  const handleRegister = async (data) => {
    try {
      toast.loading("Processing...");
      let res = await signup(data);
      if (res.status === 201 && res?.data?.statusCode === 200) {
        toast.remove();
        toast.success("Register success");
        navigate(PATH.LOGIN);
      } else {
        toast.remove();
        toast.error(res?.data?.message);
      }
    } catch (error) {
      toast.remove();
      toast.error("Register failed");
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
            <span>Regsiter</span>
          </h4>
        </section>
        <section className="main-content">
          <div className="row">
            <div className="span7">
              <h4 className="title">
                <span className="text">
                  <strong>Register</strong> Form
                </span>
              </h4>
              <form
                action="#"
                method="post"
                className="form-stacked"
                onSubmit={(e) => {
                  e.preventDefault();
                  let dataReq = {
                    name: e.target["username"]?.value,
                    email: e.target["email"]?.value,
                    phone: e.target["phone"]?.value,
                    password: e.target["password"]?.value,
                    avatar: "user",
                    role: "Customer",
                  };
                  handleRegister(dataReq);
                }}
              >
                <fieldset>
                  <div className="control-group">
                    <label className="control-label">Username</label>
                    <div className="controls">
                      <input
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        className="input-xlarge"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Email address:</label>
                    <div className="controls">
                      <input
                        // type="password"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        className="input-xlarge"
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <label className="control-label">Phone number:</label>
                    <div className="controls">
                      <input
                        type="number"
                        placeholder="Enter your phone number"
                        name="phone"
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
                        name="password"
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
      </Layout>
    </>
  );
}
