/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavTop from "../components/NavTop";

export default function contact() {
  return (
    <>
      <Header />
      <div id="wrapper" className="container">
        <NavTop />
        <div>
          <section className="google_map">
            <iframe
              width="100%"
              height={300}
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              src="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=74%2F6+Nguy%E1%BB%85n+V%C4%83n+Tho%E1%BA%A1i,+S%C6%A1n+Tr%C3%A0,+%C4%90%C3%A0+N%E1%BA%B5ng,+Vi%E1%BB%87t+Nam&aq=0&oq=74%2F6+Nguyen+Van+Thoai+Da+Nang,+Viet+Nam&sll=37.0625,-95.677068&sspn=41.546728,79.013672&ie=UTF8&hq=&hnear=74+Nguy%E1%BB%85n+V%C4%83n+Tho%E1%BA%A1i,+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+Da+Nang,+Vietnam&t=m&ll=16.064537,108.24151&spn=0.032992,0.039396&z=14&iwloc=A&output=embed"
            />
          </section>
          <section className="header_text sub">
            <img
              className="pageBanner"
              src="themes/images/pageBanner.png"
              alt="New products"
            />
            <h4>
              <span>Contact Us</span>
            </h4>
          </section>
          <section className="main-content">
            <div className="row">
              <div className="span5">
                <div>
                  <h5>ADDITIONAL INFORMATION</h5>
                  <p>
                    <strong>Phone:</strong>&nbsp;(123) 456-7890
                    <br />
                    <strong>Fax:</strong>&nbsp;+04 (123) 456-7890
                    <br />
                    <strong>Email:</strong>&nbsp;
                    <a href="#">vietcuong_it@yahoo.com</a>
                  </p>
                  <br />
                  <h5>SECONDARY OFFICE IN VIETNAM</h5>
                  <p>
                    <strong>Phone:</strong>&nbsp;(113) 023-1125
                    <br />
                    <strong>Fax:</strong>&nbsp;+04 (113) 023-1145
                    <br />
                    <strong>Email:</strong>&nbsp;
                    <a href="#">vietcuong_it@yahoo.com</a>
                  </p>
                </div>
              </div>
              <div className="span7">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <form method="post" action="#">
                  <fieldset>
                    <div className="clearfix">
                      <label htmlFor="name">
                        <span>Name:</span>
                      </label>
                      <div className="input">
                        <input
                          tabIndex={1}
                          size={18}
                          id="name"
                          name="name"
                          type="text"
                          defaultValue
                          className="input-xlarge"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="clearfix">
                      <label htmlFor="email">
                        <span>Email:</span>
                      </label>
                      <div className="input">
                        <input
                          tabIndex={2}
                          size={25}
                          id="email"
                          name="email"
                          type="text"
                          defaultValue
                          className="input-xlarge"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="clearfix">
                      <label htmlFor="message">
                        <span>Message:</span>
                      </label>
                      <div className="input">
                        <textarea
                          tabIndex={3}
                          className="input-xlarge"
                          id="message"
                          name="body"
                          rows={7}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="actions">
                      <button
                        tabIndex={3}
                        type="submit"
                        className="btn btn-inverse"
                      >
                        Send message
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
