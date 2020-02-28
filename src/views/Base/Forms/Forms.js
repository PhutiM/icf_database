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

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      name: "",
      surname: "",
      address: "",
      mobile: "",
      email: "",
      dob: "",
      marital_status: "",
      gender: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.OnButtonPress = this.OnButtonPress.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
    });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  OnButtonPress() {
    const {
      name,
      surname,
      dob,
      address,
      mobile,
      marital_status,
      email,
      gender
    } = this.state;
    fetch("http://localhost:8000/insert_partner.php", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json" // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({
        name: name,
        surname: surname,
        dob: dob,
        address: address,
        mobile: mobile,
        marital_status: marital_status,
        email: email,
        gender: gender
      }) // <-- Post parameters
    })
      .then(response => response.json())
      .then(responseJson => {
        //Here
        this.setState({ data: responseJson.data });
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
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
                      <Label htmlFor="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Surname</Label>
                      <Input
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Enter your name"
                        required
                        value={this.state.surname}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Date of birth</Label>
                      <Input
                        type="text"
                        id="dob"
                        name="dob"
                        placeholder="Enter your date of birth"
                        required
                        value={this.state.dob}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Address</Label>
                      <Input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Enter your address"
                        required
                        value={this.state.address}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Mobile Number</Label>
                      <Input
                        type="text"
                        name="mobile"
                        id="mobile"
                        placeholder="Enter your mobile number"
                        required
                        value={this.state.mobile}
                        onChange={this.handleChange}
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
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Gender</Label>
                      <Input
                        type="select"
                        value={this.state.gender}
                        onChange={this.handleChange}
                        name="gender"
                        id="gender"
                      >
                        <option value="0">Please select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Marital Status</Label>

                      <Input
                        type="select"
                        name="marital_status"
                        id="marital_status"
                        value={this.state.marital_status}
                        onChange={this.handleChange}
                      >
                        <option value="0">Please select</option>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                        <option value="Divoced">Divoced</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Button
                  type="submit"
                  onClick={this.OnButtonPress}
                  size="lrg"
                  color="primary"
                >
                  <i className="fa fa-dot-circle-o"></i> Submit
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
