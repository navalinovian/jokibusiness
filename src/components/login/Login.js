
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import { userLogin } from "../frontendServices/UserService";
import AuthContext from "../context/AuthProvider";
// import useAuth from "../context/useAuth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [userCredential, setUserCredential] = useState({
    username: '',
    password: '',
  })
  let navigate = useNavigate()
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredential((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const { username, password } = userCredential

  const onLoginClick = async () => {
    console.log("diclick");
    const user = await userLogin(userCredential);
    setAuth({ user })
    navigate('/services')
  };

  return (
    <Container>
      <Row>
        <Col md="4">
          <h1>Login</h1>
          <Form>
            <Form.Group controlId="usernameId">
              <Form.Label>User name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter user name"
                value={username}
                onChange={handleChange}
              />
              <FormControl.Feedback type="invalid"></FormControl.Feedback>
            </Form.Group>

            <Form.Group controlId="passwordId">
              <Form.Label>Your password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
          </Form>
          <Button color="primary" onClick={() => onLoginClick()}>Login</Button>
          <p className="mt-2">
            Don't have account? <Link to="/sign-up">Signup</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;