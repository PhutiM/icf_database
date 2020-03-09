import React, { Component } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row
} from "reactstrap";

// Brand Card Chart

class Widgets extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: ""
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
    const { username, email, password } = this.state;
    fetch("http://localhost:8000/insert_user.php", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json" // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }) // <-- Post parameters
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          username: "",
          email: "",
          password: "",
          data: responseJson.data
        });

        alert("Partner successfully addedd");
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Col>
          <Col xs="12" sm="10">
            <Card>
              <CardHeader>
                <strong>Partner</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="username">Username</Label>
                      <Input
                        type="text"
                        id="name"
                        placeholder="Enter your username"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        type="password"
                        id="address"
                        placeholder="Enter your password"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Email Address</Label>
                      <Input
                        type="email"
                        id="mobile"
                        placeholder="Enter your mobile email"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Type</Label>
                      <Input type="select" name="marital_status" id="gender">
                        <option value="0">Please select</option>
                        <option value="1">Admin</option>
                        <option value="2">User</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Button
                  type="submit"
                  size="lrg"
                  color="primary"
                  onClick={this.OnButtonPress}
                >
                  <i className="fa fa-dot-circle-o"></i> Submit
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Col>
      </div>
    );
  }
}

export default Widgets;
