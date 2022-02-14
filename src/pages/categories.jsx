/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import BigNumber from "bignumber.js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../apis/category.api";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import { DOMAIN, SCHEME } from "../const/api";
import { PATH } from "../const/path";

export default function categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      let res = await getCategories({ limit: 10, page: 1 });
      console.log(res);
      if (res.status === 200) {
        setCategories(res?.data?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Layout>
        <section className="header_text sub">
          <img
            className="pageBanner"
            src="themes/images/pageBanner.png"
            alt="Categories"
          />
          <h4>
            <span>Categories</span>
          </h4>
        </section>
        <section className="main-content">
          <div className="row">
            <div className="span9">
              <ul className="thumbnails listing-products">
                {categories?.map((category) => (
                  <li
                    className="span3"
                    key={category?._id}
                    onClick={() => {
                      navigate(`${PATH.PRODUCT_DETAIL}?id=${category?._id}`);
                    }}
                  >
                    <div className="product-box" style={{ minHeight: "150px" }}>
                      <span className="sale_tag" />
                      <a href="product_detail.html" style={{ padding: "10px" }}>
                        <h2>{category?.category}</h2>
                      </a>
                      <br />
                      <a href="product_detail.html" className="title">
                        {category?.description}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
              <hr />
              <Pagination total={13} pageSize={6} />
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
      </Layout>
    </>
  );
}
