import React from "react";
import {Form,Button,Col,InputGroup,Container,Row} from "react-bootstrap"
import axios from 'axios';
import history from "../history";

axios.defaults.baseURL = process.env.REACT_APP_API_URI;



class Signup extends React.Component {
  constructor(...props) {
    super(...props);
    
    this.state = {
      validated: false,
      data: {
        username: "",
        password: "",
        fullName: ""
      },
      usernameCheck: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });

    if (form.checkValidity() === true) {
    
        let getUserData = this.props.getUserData();
    
      axios("/auth/signup",{
        method: "post",
        data: this.state.data,
        withCredentials: true
      })
        .then(function(response) {
          console.log("response", response.data.data);
          getUserData(response.data.data)
          window.myMessage(response.data.message,"success")
        }).then(()=>{
          history.push("/")
        })
        .catch(err => {
          console.log(err);
          window.myMessage(err.data.message,"success")
        });
    }
  }

 

  handleChange = event => {
    let eTarget = event.target;
    const newData = { ...this.state.data };
    newData[event.target.name] = event.target.value;
    this.setState({ data: newData });

    if (event.target.name === "username") {
      if (event.target.value.length >= 4) {
        axios({
          method: "post",
          url: "/auth/isUserAvailable",
          data: { username: event.target.value }
        })
          .then(response => {
            eTarget.setCustomValidity("");
            this.setState({ usernameCheck: "Ok!, Username available." });
          })
          .catch((err, event) => {
            this.setState({ usernameCheck: "Error, Username already in use." });

            eTarget.setCustomValidity("Invalid field.");
          });
      } else if (event.target.value.length === 0) {
        this.setState({ usernameCheck: null });
        eTarget.setCustomValidity("Invalid field.");
      } else if (event.target.value.length < 4) {
        this.setState({ usernameCheck: "Username too short" });
        eTarget.setCustomValidity("Invalid field.");
      }
    }
  };

  render() {
    const { validated } = this.state;
    return (
      <Container className="signup-container">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form
              noValidate
              validated={validated}
              onSubmit={e => this.handleSubmit(e)}
              id={"SignupForm"}
            >
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="validationName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue=""
                    name="fullName"
                    value={this.state.data.fullName}
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your Name.
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>ok!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="12"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Username</Form.Label>

                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={this.state.data.username}
                      required
                      onChange={this.handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      {this.state.usernameCheck
                        ? this.state.usernameCheck
                        : "Please choose a username."}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">
                      Ok!
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    name="password"
                    value={this.state.data.password}
                    placeholder=""
                    defaultValue=""
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback>Ok!</Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Button type="submit">SignUp</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
  
  
  export default Signup;

