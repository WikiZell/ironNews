import React from "react";
import { Container,Button, FormGroup, FormControl, FormLabel,Col,Row } from "react-bootstrap";
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URI;


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    let loginData = {
      username: this.state.username,
      password:this.state.password
    }

    let getUserData = this.props.getUserData();

    axios("/auth/login",{
      method: "post",
      data: loginData,
      withCredentials: true
    })
      .then(function(response) {        
        getUserData(response.data.data)
        window.myMessage("Hello "+response.data.data.fullName+"! , you are now logged in! ;)","success");
        
        
      })
      .then(()=>{
        this.props.history.push("/")
      })
      .catch((err) => {
        
        window.myMessage(err.response.data.message,"error");
      });
    
  }

  render() {
    return (
      <Container className="signup-container">
      <Row>
          <Col md={{ span: 6, offset: 3 }}>
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <FormLabel>Username</FormLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
      </Col>
      </Row>
      </Container>

    );
  }
}