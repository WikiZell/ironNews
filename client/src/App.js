import React, { Component } from 'react';
import './App.css';
import Nav from './components/navbar';
import Home from "./pages/Home";
import WorldNews from "./pages/WorldNews";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import  {Route} from "react-router-dom"
import history from "./history";
import Loader from "./components/loader";
import SearchNews from './pages/SearchNews';

import axios from 'axios';



axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent 
    config.baseURL = process.env.REACT_APP_API_URI//"http://localhost:3001"
    config.withCredentials = true;
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


class App extends Component {
  
  constructor(props) {
    super(props) 
    this.state = { 
      /* setting: false,  */    
      data: null,
      category: null,
      language: null,
      country: null,
      user: null,
      isLoading:true,
      search:null
    };
    
    this.getUserData = this.getUserData.bind(this);
    this.updateArticlesState = this.updateArticlesState.bind(this);
  }

  componentDidMount() {
    axios({
      url: `/api/landingPage`,
      method: "GET"
    })
      .then(res => {        
        let topHeadlines = res.data.data.articles;  
        var {data, ...newData} = res.data;
        sessionStorage.setItem("config",JSON.stringify(newData))
        let user = res.headers.session === "true" ?  JSON.parse(sessionStorage.getItem("user")) : null         
        user ?  
          this.setState({ data: topHeadlines, ...newData, user, isLoading:false }) 
          : 
          this.setState({ data: topHeadlines, ...newData, isLoading:false });   
      }).catch(err => {   
      })
  }

  getUserData = user => {
    sessionStorage.setItem("user", JSON.stringify(user))
    this.setState({user})
  }

  logoutUser = () => {
    axios({
      url: `/auth/logout`,
      method: "GET"
    })
      .then(res => {        
        window.myMessage("Logged Out","success");       
      }).then(()=>{        
        this.setState({user: null })
        sessionStorage.clear()
        history.push("/")
      })
      .catch((err) => {        
        window.myMessage(err.response.data.message,"error");
      });
  }

  updateArticlesState = (articles) => {
   
    this.setState({search: articles })
  }

  render() {
    
    return (
        <>
        {this.state.isLoading && <Loader />}
        
        <Nav logoutUser={this.logoutUser} {...this.state} user={this.state.user} updateArticlesState={this.updateArticlesState}/>


        <Route exact path="/" render={(props)=> <Home {...props} sources={this.state.sources} articles={this.state.data} user={this.state.user}/>}/>
        <Route exact path="/login" render={(props)=> <Login {...props} getUserData={() => this.getUserData}/>}/>
        <Route exact path="/signup" render={(props)=> <Signup {...props} getUserData={() => this.getUserData}/>}/>        
        <Route exact path="/world-news/:cat" render={(props)=> <WorldNews {...props} sources={this.state.sources}  user={this.state.user}/>}/>
        <Route exact path="/search/:q" render={(props)=> <SearchNews {...props} sources={this.state.sources}  user={this.state.user}/>}/>


        </>
    );
  }
}

export default App;

