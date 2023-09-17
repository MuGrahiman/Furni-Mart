import React from "react";
import "./footer.css";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md='6' className="mb-4">
            <div className="logo">
              <div >
                <h1 className="text-white">FurniMart</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              reiciendis culpa. Voluptate molestias modi vitae quas eum omnis?
              Praesentium eligendi debitis dolorum non laudantium maxime? Sunt
              libero dignissimos obcaecati doloribus.
            </p>
          </Col>
          <Col md='6' lg="3"className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2" md='3' className="mb-4">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/signin">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3" md='4'>
            <div className="footer_quick-links">
              <h4 className="quick_links-title"> Contacts</h4>
              <ListGroup className="footer_contact ">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 ">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>123 ,Hilite Business park,Palazhi, Kozhikode</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+91 8123456789</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>mart@gmail.com</p>
                </ListGroupItem>
                
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" >
            <p className="footer_copyright">Copyright {year} developed by Mujeeb Rahiman.All rights Reserved.</p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
