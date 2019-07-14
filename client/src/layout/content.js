import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Article from '../components/article'
import Sidebar from "./Sidebar"
import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent 
    config.baseURL = process.env.REACT_APP_API_URI//"http://localhost:3001"
    config.withCredentials = true;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

class Content extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user: JSON.parse(sessionStorage.getItem("user"))
    };
  
  }

  componentDidMount() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    //this.setState({ ...this.props })
  }

  addToReadLater = async articleDetails => {
    /* let newState = { ...this.props } */
    let newState = { ...this.state }
    var self = this;

    axios.post('/api/add-read-later', { articleDetails })
      .then(function (response) {
        response = response.data;
        if (response.ok === 1 && response.nModified >= 1) {
          
          window.myMessage("Article added to Read Later!", "success");
          newState.user.readLater.push(articleDetails)

          sessionStorage.setItem("user", JSON.stringify(newState.user))
          self.setState({ user: newState.user })
        } else if (response.ok === 1 && response.nModified === 0) {
          window.myMessage("This article is already in your Read Later List!", "warning");
        }

      })
      .catch(function (error) {
        window.myMessage("Server error , try again later.", "error");
      });
  }

  removeReadLaterItem = async item => {
    /* let newState = { ...this.props } */
    let newState = { ...this.state }

    try {
      const { data } = await axios.get(`/api/remove-read-later-item/?url=${item}`)

      if (data.response === "ok") {
        sessionStorage.setItem("user", JSON.stringify(data.user))
        newState.user = data.user
        this.setState({ ...newState })
      }
    }
    catch (err) {

    }
  }

  contentJSX = (props) => {
    if (props.articles !== null && props.articles && props.sources !== null && props.sources) {
      var articles = props.articles.map((article, i) => {
        let source = { sourceDetail: null }
        source.sourceDetail = props.sources.filter((source) => {
          return source.id === article.source.id;
        })
        let articleData = { ...article, ...source }
        return <Article key={i} user={props.user} article={articleData} addToReadLater={this.addToReadLater} />
      })
    }
    return (
      <>
        {!props.user && (
          <Col sm={12}>
            <div className="cards cards-4">{articles}</div>
          </Col>
        )}
        {props.user && (
          <>
            <Sidebar {...props} removeReadLaterItem={this.removeReadLaterItem} />

            <Col className="articles-container" lg={true} xs={12} md={8}>
              <div className="cards">{articles}</div>
            </Col>
          </>
        )}
      </>
    );
  }

  render() {
    return (
      <>
        <Container fluid={true} >
          <Row className="home-container">
            {this.contentJSX(this.props)}
          </Row>
        </Container>
      </>
    );
  }

}

export default Content;