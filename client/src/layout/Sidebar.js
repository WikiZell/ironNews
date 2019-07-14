import React, { Component } from 'react';
import { ListGroup,Accordion,Card, Col } from 'react-bootstrap';
import axios from 'axios';
axios.interceptors.request.use(
  function(config) {
    config.baseURL = process.env.REACT_APP_API_URI//"http://localhost:3001"
    config.withCredentials = true;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

class Sidebar extends Component {
    constructor(props) {
        super(props);
      
        this.state = {           
          user: null,
        };    
        this.props = props;
      }

  componentDidMount() {
    this.setState({ user: JSON.parse(sessionStorage.getItem("user"))} )
  }
     
  readLaterList = () => {
    if(this.state.user){
      return JSON.parse(sessionStorage.getItem("user")).readLater.map((k, v) => {
        return (
          <>
            <ListGroup.Item as="div" variant="dark"> <i className="far fa-trash-alt" onClick={() => { this.props.removeReadLaterItem(k.url) }} ></i></ListGroup.Item>
            <ListGroup.Item variant="flush" as="a" action target="_blank" href={k.url}>{k.title}</ListGroup.Item>
          </>
        )
      })
    }
  }

    render() {
        return (
            <Col className="side-bar" xs={6} md={4}>
                <h1>Dashboard: {this.props.user.fullName} </h1>
                  <Accordion >
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        + Read Later ({JSON.parse(sessionStorage.getItem("user")).readLater.length})
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <ListGroup variant="flush">
                            {this.readLaterList()}                            
                          </ListGroup>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey="1">
                       + Authors
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
           
            </Col>
        );
    }
}

export default Sidebar;
