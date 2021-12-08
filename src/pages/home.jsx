/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavTop from "../components/NavTop";

export default function home() {
  return (
    <>
      <Header />
      <div id="wrapper" className="container">
        <NavTop />
        <section className="homepage-slider" id="home-slider">
          <div className="flexslider">
            <ul className="slides">
              <li>
                <img src="themes/images/carousel/banner-1.jpg" alt />
              </li>
              <li>
                <img src="themes/images/carousel/banner-2.jpg" alt />
                <div className="intro">
                  <h1>Mid season sale</h1>
                  <p>
                    <span>Up to 50% Off</span>
                  </p>
                  <p>
                    <span>On selected items online and in stores</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="header_text">
          We stand for top quality templates. Our genuine developers always
          optimized bootstrap commercial templates.
          <br />
          Don't miss to use our cheap abd best bootstrap templates.
        </section>
        <section className="main-content">
          <div className="row">
            <div className="span12">
              <div className="row">
                <div className="span12">
                  <h4 className="title">
                    <span className="pull-left">
                      <span className="text">
                        <span className="line">
                          Feature
                          <strong>Products</strong>
                        </span>
                      </span>
                    </span>
                    <span className="pull-right">
                      <a
                        className="left button"
                        href="#myCarousel"
                        data-slide="prev"
                      />
                      <a
                        className="right button"
                        href="#myCarousel"
                        data-slide="next"
                      />
                    </span>
                  </h4>
                  <div id="myCarousel" className="myCarousel carousel slide">
                    <div className="carousel-inner">
                      <div className="active item">
                        <ul className="thumbnails">
                          <li className="span3">
                            <div className="product-box">
                              <span className="sale_tag" />
                              <p>
                                <a href="product_detail.html">
                                  <img src="themes/images/ladies/1.jpg" alt />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Ut wisi enim ad
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Commodo consequat
                              </a>
                              <p className="price">$17.25</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <span className="sale_tag" />
                              <p>
                                <a href="product_detail.html">
                                  <img src="themes/images/ladies/2.jpg" alt />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Quis nostrud exerci tation
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Quis nostrud
                              </a>
                              <p className="price">$32.50</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img src="themes/images/ladies/3.jpg" alt />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Know exactly turned
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Quis nostrud
                              </a>
                              <p className="price">$14.20</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img src="themes/images/ladies/4.jpg" alt />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                You think fast
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                World once
                              </a>
                              <p className="price">$31.45</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="item">
                        <ul className="thumbnails">
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img src="themes/images/ladies/5.jpg" alt />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Know exactly
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Quis nostrud
                              </a>
                              <p className="price">$22.30</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img src="themes/images/ladies/6.jpg" alt />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Ut wisi enim ad
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Commodo consequat
                              </a>
                              <p className="price">$40.25</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img src="themes/images/ladies/7.jpg" alt />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                You think water
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                World once
                              </a>
                              <p className="price">$10.45</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img src="themes/images/ladies/8.jpg" alt />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Quis nostrud exerci
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Quis nostrud
                              </a>
                              <p className="price">$35.50</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="span12">
                  <h4 className="title">
                    <span className="pull-left">
                      <span className="text">
                        <span className="line">
                          Latest
                          <strong>Products</strong>
                        </span>
                      </span>
                    </span>
                    <span className="pull-right">
                      <a
                        className="left button"
                        href="#myCarousel-2"
                        data-slide="prev"
                      />
                      <a
                        className="right button"
                        href="#myCarousel-2"
                        data-slide="next"
                      />
                    </span>
                  </h4>
                  <div id="myCarousel-2" className="myCarousel carousel slide">
                    <div className="carousel-inner">
                      <div className="active item">
                        <ul className="thumbnails">
                          <li className="span3">
                            <div className="product-box">
                              <span className="sale_tag" />
                              <p>
                                <a href="product_detail.html">
                                  <img
                                    src="themes/images/cloth/bootstrap-women-ware2.jpg"
                                    alt
                                  />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Ut wisi enim ad
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Commodo consequat
                              </a>
                              <p className="price">$25.50</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img
                                    src="themes/images/cloth/bootstrap-women-ware1.jpg"
                                    alt
                                  />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Quis nostrud exerci tation
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Quis nostrud
                              </a>
                              <p className="price">$17.55</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img
                                    src="themes/images/cloth/bootstrap-women-ware6.jpg"
                                    alt
                                  />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Know exactly turned
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Quis nostrud
                              </a>
                              <p className="price">$25.30</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img
                                    src="themes/images/cloth/bootstrap-women-ware5.jpg"
                                    alt
                                  />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                You think fast
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                World once
                              </a>
                              <p className="price">$25.60</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="item">
                        <ul className="thumbnails">
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img
                                    src="themes/images/cloth/bootstrap-women-ware4.jpg"
                                    alt
                                  />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Know exactly
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Quis nostrud
                              </a>
                              <p className="price">$45.50</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img
                                    src="themes/images/cloth/bootstrap-women-ware3.jpg"
                                    alt
                                  />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Ut wisi enim ad
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Commodo consequat
                              </a>
                              <p className="price">$33.50</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img
                                    src="themes/images/cloth/bootstrap-women-ware2.jpg"
                                    alt
                                  />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                You think water
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                World once
                              </a>
                              <p className="price">$45.30</p>
                            </div>
                          </li>
                          <li className="span3">
                            <div className="product-box">
                              <p>
                                <a href="product_detail.html">
                                  <img
                                    src="themes/images/cloth/bootstrap-women-ware1.jpg"
                                    alt
                                  />
                                </a>
                              </p>
                              <a href="product_detail.html" className="title">
                                Quis nostrud exerci
                              </a>
                              <br />
                              <a href="products.html" className="category">
                                Quis nostrud
                              </a>
                              <p className="price">$25.20</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row feature_box">
                <div className="span4">
                  <div className="service">
                    <div className="responsive">
                      <img src="themes/images/feature_img_2.png" alt />
                      <h4>
                        MODERN <strong>DESIGN</strong>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        printing industry unknown printer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="span4">
                  <div className="service">
                    <div className="customize">
                      <img src="themes/images/feature_img_1.png" alt />
                      <h4>
                        FREE <strong>SHIPPING</strong>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        printing industry unknown printer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="span4">
                  <div className="service">
                    <div className="support">
                      <img src="themes/images/feature_img_3.png" alt />
                      <h4>
                        24/7 LIVE <strong>SUPPORT</strong>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        printing industry unknown printer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our_client">
          <h4 className="title">
            <span className="text">Manufactures</span>
          </h4>
          <div className="row">
            <div className="span2">
              <a href="#">
                <img alt src="themes/images/clients/14.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt src="themes/images/clients/35.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt src="themes/images/clients/1.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt src="themes/images/clients/2.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt src="themes/images/clients/3.png" />
              </a>
            </div>
            <div className="span2">
              <a href="#">
                <img alt src="themes/images/clients/4.png" />
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
