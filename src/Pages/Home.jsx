import React, { useEffect, useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../Assets/images/hero-img.png";
import "../Styles/home.css";
import { Link } from "react-router-dom";
import {  motion } from "framer-motion";
import Services from "../Services/Services";
import ProductList from "../Components/UI/ProductList";
import products from "../Assets/data/products";
import counterImg from "../Assets/images/counter-timer-img.png";
import Clock from "../Components/UI/Clock";
function Home() {

  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSalesProduct, setBestSalesProduct] = useState([]);
  const [mobileProduct, setMobileProduct] = useState([]);
  const [wirelessProduct, setWirelessProduct] = useState([]);
  const [popularProduct, setPopularProduct] = useState([]);
  const year = new Date().getFullYear();
  useEffect(() => {
    //Trending Product
    const fiteredTrendingProduct = products.filter(
      (items) => items.category === "chair"
    );
    setTrendingProduct(fiteredTrendingProduct);

    //Sales Product
    const fiteredBestSalesProduct = products.filter(
      (items) => items.category === "sofa"
    );
    setBestSalesProduct(fiteredBestSalesProduct);

    //Mobile Product
    const fiteredMobileProduct = products.filter(
      (items) => items.category === "stool"
    );
    setMobileProduct(fiteredMobileProduct);

    //Wireless Product
    const fiteredWirelessProduct = products.filter(
      (items) => items.category === "classic"
    );
    setWirelessProduct(fiteredWirelessProduct);

    //Popular Product
    const fiteredPopularProduct = products.filter(
      (items) => items.category === "chaise"
    );
    setPopularProduct(fiteredPopularProduct);
  }, []);
  return (
    <Helmet title={"Home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending Product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, reiciendis culpa. Voluptate molestias modi vitae quas
                  eum omnis? Praesentium eligendi debitis dolorum non laudantium
                  maxime? Sunt libero dignissimos obcaecati doloribus.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            <ProductList data={trendingProduct} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProduct} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col" >
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Arm Chair</h3>
              </div>
              <Clock/>
              <motion.button whileTap={{scale:1.2}} className="buy_btn store_btn"><Link to='/shop'>Visit Store</Link></motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_img ">
              <img src={counterImg} alt=" CounterImage" />
            </Col>

            {/* <ProductList data={bestSalesProduct} /> */}
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProduct} />
            <ProductList data={wirelessProduct} />
          </Row>
        </Container>
      </section>

      <section className="popular_category ">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Popular in Category</h2>
            </Col>
            <ProductList data={popularProduct} />
            {/* <ProductList data={wirelessProduct} /> */}
          </Row>
        </Container>
      </section>

    </Helmet>
  );
}

export default Home;
