import React, { Component } from 'react';
import Content from "../layout/content"
/* import { BrowserRouter as Router, Route, Link } from "react-router-dom"; */

class Home extends Component {
    /* constructor(props) {
        super(props)
        
    } */
    
    render() {
        return (
            <>
            <Content {...this.props} user={JSON.parse(sessionStorage.getItem("user"))}/>
            
            </>

        );
    }
}

export default Home;
