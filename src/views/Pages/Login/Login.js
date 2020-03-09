import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.OnButtonPress = this.OnButtonPress.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  OnButtonPress() {
    const { username, password } = this.state;
    fetch("https://plushealthmedical.000webhostapp.com/authenticate.php", {
      mode: "no-cors",
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json" // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({
        username: username,
        password: password
      }) // <-- Post parameters
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson == "Wrong Details") {
          this.setState({ error: "", loading: false });
          alert("Your username or password is incorrect.");
        } else if (responseJson == "Ooops, something went wrong") {
          alert("Ooops, something went wrong");
        } else {
          this.setState({ error: "", loading: false });
          window.location.href = "#/dashboard";
        }
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>

                        <Input
                          type="text"
                          placeholder="Username"
                          autoComplete="username"
                          value={this.state.username}
                          onChange={this.handleChange}
                          name="username"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          name="password"
                        />
                      </InputGroup>

                      <Row>
                        <Col xs="12">
                          <Button
                            color="primary"
                            className="px-12"
                            onClick={this.OnButtonPress}
                          >
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
