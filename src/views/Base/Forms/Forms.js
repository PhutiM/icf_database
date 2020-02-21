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
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => {
      return { fadeIn: !prevState };
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
                        placeholder="Enter your name"
                        required
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
                        placeholder="Enter your address"
                        required
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
                        id="mobile"
                        placeholder="Enter your mobile number"
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
                        placeholder="Enter your email address"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Gender</Label>

                      <Input type="select" name="gender" id="gender">
                        <option value="0">Please select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="name">Marital Status</Label>

                      <Input type="select" name="marital_status" id="gender">
                        <option value="0">Please select</option>
                        <option value="1">Married</option>
                        <option value="2">Single</option>
                        <option value="3">Divoced</option>
                      </Input>
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
                        placeholder="Enter your surname"
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="lrg" color="primary">
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
