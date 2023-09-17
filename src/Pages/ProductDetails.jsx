import React, { useEffect, useRef, useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import products from "../Assets/data/products";
import "../Styles/product-details.css";
import { motion } from "framer-motion";
import ProductList from "../Components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../Apis/Slices/cartSlice";
import { toast } from "react-toastify";

function ProductDetails() {
  const { id } = useParams();
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMSG = useRef("");
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === id);
  const relatedProduct = products.filter(
    (item) => item.category === product.category
  );

  const submitHandle = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMSG.current.value;
    const reviewObj = {
      User: reviewUserName,
      Msg: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Review Submitted!");
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: product.imgUrl,
        productName: product.productName,
        price: product.price,
      })
    );
    toast.success("Product added successfully ");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <Helmet title={product.productName}>
      <CommonSection title={product.productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={product.imgUrl} alt="productImage" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2>{product.productName}</h2>
                <div className="product_rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <span key={i}>
                          <i className="ri-star-s-fill"></i>
                        </span>
                      ))}

                    {/* <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-fill"></i>
                    </span> */}
                  </div>
                  <p>
                    (<span>{product.avgRating}</span> Ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product_price">${product.price}</span>
                  <span>Category: {product.category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{product.shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  onClick={addToCart}
                  className="buy_btn"
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6
                  onClick={() => setTab("desc")}
                  className={`${tab === "desc" ? "active_tab" : ""}`}
                >
                  Description{" "}
                </h6>
                <h6
                  onClick={() => setTab("rev")}
                  className={`${tab === "rev" ? "active_tab" : ""}`}
                >
                  Reviews ({product.reviews.length}){" "}
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab_content mt-5">
                  <p>{product.description}</p>
                </div>
              ) : (
                <div className="product_review mt-5">
                  <div className="review_wrapper">
                    <ul>
                      {product?.reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>John Deo</h6>
                          <span>{item.rating}(Rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="review_form">
                      <h4>Leave your experience</h4>
                      <form
                        action=""
                        onSubmit={submitHandle}
                        className="action"
                      >
                        <div className="form_group ">
                          <input
                            type="text "
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>
                        <div className="form_group d-flex align-items-center gap-5 rating_group">
                          {/* <span>
                            
                            1<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            
                            2<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            
                            3<i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            4 <i className="ri-star-s-fill"></i>
                          </span>
                          <span>
                            5 <i className="ri-star-s-fill"></i>
                          </span> */}
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <motion.span
                                whileTap={{ scale: 1.2 }}
                                key={i}
                                onClick={() => setRating(i)}
                              >
                                {i + 1}
                                <i className="ri-star-s-fill"></i>
                              </motion.span>
                            ))}
                        </div>
                        <div className="form_group">
                          <textarea
                            rows={4}
                            ref={reviewMSG}
                            type="text "
                            required
                            placeholder="Review Message ...."
                          />
                        </div>
                        <button type="submit" className="buy_btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col className="mt-5" lg="12">
              <h2 className="related_title">you might also like</h2>
            </Col>
            <ProductList data={relatedProduct} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails;
