import React, { useEffect, useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import products from "../Assets/data/products";
import "../Styles/shop.css";
import ProductList from "../Components/UI/ProductList";
function Shop() {
  const [productData, setProductData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    const filteredProduct = products.filter(
      (item) => item.category === filterValue
    );
    setProductData(filteredProduct);
  };
  const handleChange = (e) => {
    const searchTerm = e.target.value;

    const searchProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductData(searchProduct);
  };
  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter_widget">
                <select onClick={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">chaise</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Classic</option>
                  <option value="wireless">Stool</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter_widget">
                <select>
                  <option>Sort By Category</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search_box">
                <input
                  type="text"
                  placeholder="search ..."
                  onChange={handleChange}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1 className="text-center">Ooops No Product found !</h1>
            ) : (
              <ProductList data={productData} />
            )}{" "}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Shop;
