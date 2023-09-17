import React, { useEffect, useRef } from "react";
import logo from "../../Assets/images/antique-armchair-isolated-white_614426-27-removebg-preview.png";
import userIcon from "../../Assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useSelector } from "react-redux";
import useAuth from "../../Hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase.Config";
import { toast } from "react-toastify";
const nav_links = [
  { path: "home", display: "Home" },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];
function Header() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);
  const { currentUser } = useAuth();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const stickyHeaderFunct = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  const navigateToCart = () => navigate("/cart");
  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged Out");
        navigate("/home");
      })
      .catch((err) => toast.error(err.message));
  };
  useEffect(() => {
    stickyHeaderFunct();
    console.log(currentUser);
    return () => window.removeEventListener("scroll", stickyHeaderFunct);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");
  const toggleProfileAction = () => {
    const togle =
      profileActionRef.current.classList.toggle("show_profileAction");
    console.log(currentUser, togle);
  };
  return (
    <header className="header" ref={headerRef}>
      <Container className="container">
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="Header_logo" />
              <div className="logo">
                <h1>FurniMart</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <motion.ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
            </div>

            <div className="nav_icons">
              <span className="fav_icon">
                <i className="ri-heart-line"></i>
                <span className="badge">2</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  onClick={toggleProfileAction}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  alt=""
                />
                <div
                  className="profile_action"
                  ref={profileActionRef}
                  onClick={toggleProfileAction}
                >
                  {currentUser ? (
                    <span onClick={logOut}>Log Out</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to={"/signup"}>Sign Up</Link>
                      <Link to={"/signin"}> Sign In</Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="mobile_menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
