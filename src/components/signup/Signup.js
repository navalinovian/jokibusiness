import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import { userRegister } from "../frontendServices/UserService";

const Signup = () => {
  const [userCredential, setUserCredential] = useState({
    username:'',
    password:''
  })

  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredential((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const {username, password} = userCredential
  const onSignupClick = async () => {
    userRegister(userCredential).then((res) => {
      if (res.status === 200) {
        navigate("/")
      }
    })
  };

  return (
    <Container>
      <Row>
        <Col md="4">
          <h1>Sign up</h1>
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
          <Button
            color="primary"
            onClick={()=>onSignupClick()}
          >Sign up</Button>
          <p className="mt-2">
            Already have account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;