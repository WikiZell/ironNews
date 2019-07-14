import React, { Component } from 'react';
import Content from "../layout/content"
/* import { BrowserRouter as Router, Route, Link } from "react-router-dom"; */
import axios from 'axios';


axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent 
    config.baseURL = process.env.REACT_APP_API_URI
    config.withCredentials = true;
    return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
    );


    class SearchNews extends Component {

        state = { 
            articles: null,
            
            
        }
    
        getArticles = async() => {
        try {
            const { data } = await axios({
                    url: `/api/search`,
                    params: this.props.match.params,
                    method: "GET"
                })
                this.setState({ articles: data.articles, ...JSON.parse(sessionStorage.getItem("config")) || null })
      
      }
      catch(err){

      }
    }

    componentDidMount() {        
      this.getArticles()
    }

    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        this.getArticles();
      }
    }
    
    render() {
        
        return (
            <>
            <Content {...this.state} {...this.props} user={this.props.user}/>
            
            </>

        );
    }
}

export default SearchNews;