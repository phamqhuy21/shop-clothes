/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import BigNumber from "bignumber.js";
import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getProductDetail } from "../apis/product.api";
import Layout from "../components/Layout";

export default function productDetail() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [info, setInfo] = useState();

  const getData = async () => {
    try {
      let id = searchParams.get("id");
      let res = await getProductDetail(id);
      if (res.status === 200) {
        setInfo(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let id = searchParams.get("id");
    if (id) {
      getData();
    }
  }, [location?.search]);

  return (
    <Layout>
      <section className="header_text sub">
        <img
          className="pageBanner"
          src="themes/images/pageBanner.png"
          alt="New products"
        />
        <h4>
          <span>Product Detail</span>
        </h4>
      </section>
      <section className="main-content">
        <div className="row">
          <div className="span9">
            <div className="row">
              <div className="span4">
                <a
                  href="themes/images/ladies/1.jpg"
                  className="thumbnail"
                  data-fancybox-group="group1"
                  title="Description 1"
                >
                  <img alt src={`${info?.productImages[0]}`} />
                </a>
                <ul className="thumbnails small">
                  {info?.productImages?.map((prodImg, index) => (
                    <li className="span1" key={index}>
                      <a
                        href="themes/images/ladies/2.jpg"
                        className="thumbnail"
                        data-fancybox-group="group1"
                        title="Description 2"
                      >
                        <img src={prodImg} alt />
                      </a>
                    </li>
                  ))}
                  {/* <li className="span1">
                    <a
                      href="themes/images/ladies/2.jpg"
                      className="thumbnail"
                      data-fancybox-group="group1"
                      title="Description 2"
                    >
                      <img src="themes/images/ladies/2.jpg" alt />
                    </a>
                  </li>
                  <li className="span1">
                    <a
                      href="themes/images/ladies/3.jpg"
                      className="thumbnail"
                      data-fancybox-group="group1"
                      title="Description 3"
                    >
                      <img src="themes/images/ladies/3.jpg" alt />
                    </a>
                  </li>
                  <li className="span1">
                    <a
                      href="themes/images/ladies/4.jpg"
                      className="thumbnail"
                      data-fancybox-group="group1"
                      title="Description 4"
                    >
                      <img src="themes/images/ladies/4.jpg" alt />
                    </a>
                  </li>
                  <li className="span1">
                    <a
                      href="themes/images/ladies/5.jpg"
                      className="thumbnail"
                      data-fancybox-group="group1"
                      title="Description 5"
                    >
                      <img src="themes/images/ladies/5.jpg" alt />
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="span5" style={{ textTransform: "capitalize" }}>
                <address>
                  <strong>Brand:</strong> <span>{info?.brand}</span>
                  <br />
                  <strong>Origin:</strong> <span>{info?.origin}</span>
                  <br />
                  <strong>Product name:</strong>{" "}
                  <span>{info?.productName}</span>
                  <br />
                  <br />
                </address>
                <h4>
                  <strong>
                    Price: ${new BigNumber(info?.price).toFormat(2)}
                  </strong>
                </h4>
              </div>
              <div className="span5">
                <form className="form-inline">
                  <label className="checkbox">
                    <input type="checkbox" defaultValue /> Option one is this
                    and that
                  </label>
                  <br />
                  <label className="checkbox">
                    <input type="checkbox" defaultValue /> Be sure to include
                    why it's great
                  </label>
                  <p>&nbsp;</p>
                  <label style={{ marginRight: 5 }}>Quantity:</label>
                  <input
                    type="text"
                    className="span1"
                    placeholder={1}
                    style={{ margin: "0 5px" }}
                  />
                  <button className="btn btn-inverse" type="submit">
                    Add to cart
                  </button>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="span9">
                <ul className="nav nav-tabs" id="myTab">
                  <li className="active">
                    <a style={{ cursor: "pointer" }}>Description</a>
                  </li>
                  {/* <li className>
                    <a style={{ cursor: "pointer" }}>Additional Information</a>
                  </li> */}
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="home">
                    {info?.description}
                  </div>
                  <div className="tab-pane" id="profile">
                    <table className="table table-striped shop_attributes">
                      <tbody>
                        <tr className>
                          <th>Size</th>
                          <td>Large, Medium, Small, X-Large</td>
                        </tr>
                        <tr className="alt">
                          <th>Colour</th>
                          <td>Orange, Yellow</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="span9">
                <br />
                <h4 className="title">
                  <span className="pull-left">
                    <span className="text">
                      <strong>Related</strong> Products
                    </span>
                  </span>
                  <span className="pull-right">
                    <a
                      className="left button"
                      href="#myCarousel-1"
                      data-slide="prev"
                    />
                    <a
                      className="right button"
                      href="#myCarousel-1"
                      data-slide="next"
                    />
                  </span>
                </h4>
                <div id="myCarousel-1" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="active item">
                      <ul className="thumbnails listing-products">
                        <li className="span3">
                          <div className="product-box">
                            <span className="sale_tag" />
                            <a href="product_detail.html">
                              <img alt src="themes/images/ladies/6.jpg" />
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
                              <img alt src="themes/images/ladies/5.jpg" />
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
                              <img alt src="themes/images/ladies/4.jpg" />
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
                      </ul>
                    </div>
                    <div className="item">
                      <ul className="thumbnails listing-products">
                        <li className="span3">
                          <div className="product-box">
                            <span className="sale_tag" />
                            <a href="product_detail.html">
                              <img alt src="themes/images/ladies/1.jpg" />
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
                              <img alt src="themes/images/ladies/2.jpg" />
                            </a>
                            <br />
                            <a href="product_detail.html">
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
                              <img alt src="themes/images/ladies/3.jpg" />
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
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
                          <a href="product_detail.html">
                            <img alt src="themes/images/ladies/7.jpg" />
                          </a>
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
                          <a href="product_detail.html">
                            <img alt src="themes/images/ladies/8.jpg" />
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
                      src="themes/images/ladies/1.jpg"
                      alt="Praesent tempor sem sodales"
                    />
                  </a>
                  <a href="#">Praesent tempor sem</a>
                </li>
                <li>
                  <a href="#" title="Luctus quam ultrices rutrum">
                    <img
                      src="themes/images/ladies/2.jpg"
                      alt="Luctus quam ultrices rutrum"
                    />
                  </a>
                  <a href="#">Luctus quam ultrices rutrum</a>
                </li>
                <li>
                  <a href="#" title="Fusce id molestie massa">
                    <img
                      src="themes/images/ladies/3.jpg"
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
    </Layout>
  );
}
