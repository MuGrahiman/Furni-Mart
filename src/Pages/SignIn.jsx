import React, { useState } from "react";
import Helmet from "../Components/Helmet/Helmet";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../Styles/login.css";
import { toast } from "react-toastify";
import { auth } from "../Firebase.Config";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user)
      setLoading(false);
      toast.success("Successfully Logged In!");
      navigate("/checkout");
    } catch (error) {
      setLoading(false);
      console.log(error)
      toast.error("something went wrong");
    }
  };
  return (
    <Helmet title="Sign In">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col className="text-center">
                <h6 className="fw-bold"> Loading... </h6>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Sign in</h3>
                <Form className="auth_form" onSubmit={signin}>
                  <FormGroup className="form_group">
                    <input
                      type="text"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form_group">
                    <input
                      type="password"
                      required
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <button type="submit" className="buy_btn auth_btn">
                    Login
                  </button>
                  <p>
                    Don`t have an account?{" "}
                    <Link to={"/signup"}>Create an account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default SignIn;
