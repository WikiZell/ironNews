import React from "react";

import {Card} from 'react-bootstrap'
import axios from "axios"
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




const Article = props => {
  
  let user = props.user || null

  let style = {}
  /* 
  switch (props.sourceDetail.category) {
    case "general":
      style.border = "info"
      style.bg = "info"
      break;
  
    case "business":
      style.border = "secondary"
      style.bg = "secondary"
      break;
  
    case "technology":
      style.border = "primary"
      style.bg = "primary"
      break;
  
    case "sports":
      style.border = "success"
      style.bg = "success"
      break;
  
    case "entertainment":
      style.border = "light"
      style.bg = "light"
      break;
  
    case "health":
      style.border = "danger"
      style.bg = "danger"
      break;
  
    case "science":
      style.border = "warning"
      style.bg = "warning"
      break;
    
  
    default:
      break;
  } */


  let {addToReadLater, ...artilceData} = props;
  let theArticle = artilceData.article; 
  let article = props.article;
  if(!article.sourceDetail[0]) var category = "No Category available"
  else category = article.sourceDetail[0].category 
  
  return (
    <>
      <Card {...style}>
      {/* <Card.Header as="h5">Featured</Card.Header> */}
        <Card.Img variant="top" src={article.urlToImage || "http://placehold.jp/cccccc/ffffff/550x350.png?text=Image%20not%20available&css=%7B%22border-radius%22%3A%2215px%22%7D"} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Subtitle className="mb-1 font-italic text-muted">
            By {article.author || "N/A"} @ {article.publishedAt}
            </Card.Subtitle>
          <Card.Text>
          {article.description || "No description available"}
          <Card.Link target="_blank" href={article.url}> [Read more..]</Card.Link>
          
          </Card.Text>
        </Card.Body>
        {user && 
        <Card.Header className="article-action">
          <span title="Read Later" className="fas fa-glasses" onClick={ ()=>{props.addToReadLater(theArticle)}  }></span>
        
        </Card.Header>
        }
        <Card.Footer>
          <small className="font-italic text-muted">            
            Source: {article.source.name || "No source available"} Category: {category}
          </small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Article;
