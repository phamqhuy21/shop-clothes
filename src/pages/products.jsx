/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavTop from "../components/NavTop";

export default function products() {
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
            <span>New products</span>
          </h4>
        </section>
        <section className="main-content">
          <div className="row">
            <div className="span9">
              <ul className="thumbnails listing-products">
                <li className="span3">
                  <div className="product-box">
                    <span className="sale_tag" />
                    <a href="product_detail.html">
                      <img alt src="themes/images/ladies/9.jpg" />
                    </a>
                    <br />
                    <a href="product_detail.html" className="title">
                      Fusce id molestie massa
                    </a>
                    <br />
                    <a href="#" className="category">
                      Phasellus consequat
                    </a>
                    <p className="price">$341</p>
                  </div>
                </li>
                <li className="span3">
                  <div className="product-box">
                    <a href="product_detail.html">
                      <img alt src="themes/images/ladies/8.jpg" />
                    </a>
                    <br />
                    <a href="product_detail.html" className="title">
                      Praesent tempor sem
                    </a>
                    <br />
                    <a href="#" className="category">
                      Erat gravida
                    </a>
                    <p className="price">$28</p>
                  </div>
                </li>
                <li className="span3">
                  <div className="product-box">
                    <span className="sale_tag" />
                    <a href="product_detail.html">
                      <img alt src="themes/images/ladies/7.jpg" />
                    </a>
                    <br />
                    <a href="product_detail.html" className="title">
                      Wuam ultrices rutrum
                    </a>
                    <br />
                    <a href="#" className="category">
                      Suspendisse aliquet
                    </a>
                    <p className="price">$341</p>
                  </div>
                </li>
                <li className="span3">
                  <div className="product-box">
                    <span className="sale_tag" />
                    <a href="product_detail.html">
                      <img alt src="themes/images/ladies/6.jpg" />
                    </a>
                    <br />
                    <a href="product_detail.html" className="title">
                      Praesent tempor sem sodales
                    </a>
                    <br />
                    <a href="#" className="category">
                      Nam imperdiet
                    </a>
                    <p className="price">$49</p>
                  </div>
                </li>
                <li className="span3">
                  <div className="product-box">
                    <a href="product_detail.html">
                      <img alt src="themes/images/ladies/1.jpg" />
                    </a>
                    <br />
                    <a href="product_detail.html" className="title">
                      Fusce id molestie massa
                    </a>
                    <br />
                    <a href="#" className="category">
                      Congue diam congue
                    </a>
                    <p className="price">$35</p>
                  </div>
                </li>
                <li className="span3">
                  <div className="product-box">
                    <a href="product_detail.html">
                      <img alt src="themes/images/ladies/2.jpg" />
                    </a>
                    <br />
                    <a href="product_detail.html" className="title">
                      Tempor sem sodales
                    </a>
                    <br />
                    <a href="#" className="category">
                      Gravida placerat
                    </a>
                    <p className="price">$61</p>
                  </div>
                </li>
                <li className="span3">
                  <div className="product-box">
                    <a href="product_detail.html">
                      <img alt src="themes/images/ladies/3.jpg" />
                    </a>
                    <br />
                    <a href="product_detail.html" className="title">
                      Quam ultrices rutrum
                    </a>
                    <br />
                    <a href="#" className="category">
                      Orci et nisl iaculis
                    </a>
                    <p className="price">$233</p>
                  </div>
                </li>
                <li className="span3">
                  <div className="product-box">
                    <a href="product_detail.html">
                      <img alt src="themes/images/ladies/4.jpg" />
                    </a>
                    <br />
                    <a href="product_detail.html" className="title">
                      Tempor sem sodales
                    </a>
                    <br />
                    <a href="#" className="category">
                      Urna nec lectus mollis
                    </a>
                    <p className="price">$134</p>
                  </div>
                </li>
                <li className="span3">
                  <div className="product-box">
                    <a href="product_detail.html">
                      <img alt src="themes/images/ladies/5.jpg" />
                    </a>
                    <br />
                    <a href="product_detail.html" className="title">
                      Luctus quam ultrices
                    </a>
                    <br />
                    <a href="#" className="category">
                      Suspendisse aliquet
                    </a>
                    <p className="price">$261</p>
                  </div>
                </li>
              </ul>
              <hr />
              <div className="pagination pagination-small pagination-centered">
                <ul>
                  <li>
                    <a href="#">Prev</a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">Next</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="span3 col">
              <div className="block">
                <ul className="nav nav-list">
                  <li className="nav-header">SUB CATEGORIES</li>
                  <li>
                    <a href="products.html">Nullam semper elementum</a>
                  </li>
                  <li className="active">
                    <a href="products.html">Phasellus ultricies</a>
                  </li>
                  <li>
                    <a href="products.html">Donec laoreet dui</a>
                  </li>
                  <li>
                    <a href="products.html">Nullam semper elementum</a>
                  </li>
                  <li>
                    <a href="products.html">Phasellus ultricies</a>
                  </li>
                  <li>
                    <a href="products.html">Donec laoreet dui</a>
                  </li>
                </ul>
                <br />
                <ul className="nav nav-list below">
                  <li className="nav-header">MANUFACTURES</li>
                  <li>
                    <a href="products.html">Adidas</a>
                  </li>
                  <li>
                    <a href="products.html">Nike</a>
                  </li>
                  <li>
                    <a href="products.html">Dunlop</a>
                  </li>
                  <li>
                    <a href="products.html">Yamaha</a>
                  </li>
                </ul>
              </div>
              <div className="block">
                <h4 className="title">
                  <span className="pull-left">
                    <span className="text">Randomize</span>
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
                <div id="myCarousel" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="active item">
                      <ul className="thumbnails listing-products">
                        <li className="span3">
                          <div className="product-box">
                            <span className="sale_tag" />
                            <img alt src="themes/images/ladies/1.jpg" />
                            <br />
                            <a href="product_detail.html" className="title">
                              Fusce id molestie massa
                            </a>
                            <br />
                            <a href="#" className="category">
                              Suspendisse aliquet
                            </a>
                            <p className="price">$261</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="item">
                      <ul className="thumbnails listing-products">
                        <li className="span3">
                          <div className="product-box">
                            <img alt src="themes/images/ladies/2.jpg" />
                            <br />
                            <a href="product_detail.html" className="title">
                              Tempor sem sodales
                            </a>
                            <br />
                            <a href="#" className="category">
                              Urna nec lectus mollis
                            </a>
                            <p className="price">$134</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block">
                <h4 className="title">
                  <strong>Best</strong> Seller
                </h4>
                <ul className="small-product">
                  <li>
                    <a href="#" title="Praesent tempor sem sodales">
                      <img
                        src="themes/images/ladies/3.jpg"
                        alt="Praesent tempor sem sodales"
                      />
                    </a>
                    <a href="#">Praesent tempor sem</a>
                  </li>
                  <li>
                    <a href="#" title="Luctus quam ultrices rutrum">
                      <img
                        src="themes/images/ladies/4.jpg"
                        alt="Luctus quam ultrices rutrum"
                      />
                    </a>
                    <a href="#">Luctus quam ultrices rutrum</a>
                  </li>
                  <li>
                    <a href="#" title="Fusce id molestie massa">
                      <img
                        src="themes/images/ladies/5.jpg"
                        alt="Fusce id molestie massa"
                      />
                    </a>
                    <a href="#">Fusce id molestie massa</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
