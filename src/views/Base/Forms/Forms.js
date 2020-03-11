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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

function validate(
  name,
  surname,
  email,
  mobile,
  address,
  dob,
  marital_status,
  gender,
  department
) {
  // true means invalid, so our conditions got reversed
  return {
    name: name.length === 0,
    surname: surname.length === 0,
    email: email.length === 0,
    mobile: mobile.length === 0,
    dob: dob.length === 0,
    address: address.length === 0,
    marital_status: marital_status.length === 0,
    gender: gender.length === 0
    //  department: department.length === 0
  };
}

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
      dob: new Date(),
      marital_status: "",
      gender: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.OnButtonPress = this.OnButtonPress.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleChangeStartDate(date) {
    this.setState({
      dob: date
    });
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

  canBeSubmitted() {
    const errors = validate(
      this.state.name,
      this.state.surname,
      this.state.email,
      this.state.mobile,
      this.state.address
      //this.state.address
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  handleSubmit = evt => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }

    alert("");
  };

  OnButtonPress() {
    const {
      name,
      surname,
      dob,
      address,
      mobile,
      marital_status,
      email,
      gender,
      department
    } = this.state;
    fetch("https://plushealthmedical.000webhostapp.com/insert_partner.php", {
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
        gender: gender,
        department: department
      }) // <-- Post parameters
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          name: "",
          surname: "",
          dob: new Date(),
          address: "",
          mobile: "",
          marital_status: "",
          email: "",
          gender: "",
          department: "",
          data: responseJson.data
        });

        alert("Partner successfully addedd");
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    const errors = validate(
      this.state.name,
      this.state.surname,
      this.state.email,
      this.state.mobile,
      this.state.address,
      this.state.dob,
      this.state.marital_status,
      this.state.gender
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div className="animated fadeIn">
        <form onSubmit={this.handleSubmit}>
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
                          className={errors.surname ? "error" : ""}
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
                        <Label htmlFor="dob">Date of birth</Label>
                        <Col></Col>
                        <DatePicker
                          selected={this.state.dob}
                          onChange={this.handleChangeStartDate}
                          value={this.state.dob}
                          id="dob"
                          name="dob"
                          required
                          dateFormat="yyyy/MM/dd"
                          placeholder="Enter your date of birth"
                          showMonthDropdown
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
                        <Label htmlFor="name">Department</Label>
                        <Input
                          type="select"
                          name="department"
                          id="department"
                          value={this.state.department}
                          onChange={this.handleChange}
                        >
                          <option value="0">Please select</option>
                          <option value="Youth">Youth</option>
                          <option value="Young Adult">Young Adult</option>
                          <option value="Sunday School">Sunday School</option>
                          <option value="Mother">Mother</option>
                          <option value="Father">Father</option>
                          <option value="Over 50">Over 50</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="name">Gender</Label>
                        <Input
                          type="select"
                          name="gender"
                          id="gender"
                          value={this.state.gender}
                          onChange={this.handleChange}
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
                    disabled={isDisabled}
                  >
                    <i className="fa fa-dot-circle-o"></i> Submit
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default Forms;
