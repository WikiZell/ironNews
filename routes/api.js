require("dotenv").config();
var express = require('express');
var router = express.Router();



var bcrypt = require("bcrypt")
var UserDB = require("../models/Users")
var NewsCache = require("../models/NewsCache")
var mongoose = require("mongoose")
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.NEWS_API);

var testResp = require('../top-headlines.json')

router.get('/search', function(req, res, next) {

  //let maxOldestNews = new Date(new Date().getFullYear(), 0, 1).toISOString().substring(0,10); //ISO8601 YYYY-MM-DD
  let maxOldestNews = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().substring(0,10); // Free API allow 1 month older news Set it
  let today = new Date().toISOString().substring(0,10);

  if(req.query.from){
    //If from date is older then allowed set as maximum oldest possible
    req.query.from = (new Date(req.query.from) < maxOldestNews) ? req.query.from : maxOldestNews
  }
  
  

  let newsSearchQuery = {
    q: req.query.q,
    sources: req.query.sources || null,
    domains: req.query.domains || null,
    from: req.query.from || maxOldestNews,
    to: req.query.to || today,
    language: req.query.language || "en",
    sortBy: req.query.sortBy || "relevancy",
    page: req.query.page || 1,
    pageSize: req.query.pageSize || 50
  }
/* 
  var isoDatePlus = new Date(new Date().getTime() - 30*60000).toISOString(); // current Date + 15 minutes ISODATE format
  let findQuery = {
              $and: [
                { ...newsSearchQuery, id: req.query.q},
                { updatedAt: { $gt: isoDatePlus } }
              ]
            }

    NewsCache.findOne(findQuery)
      .then(news => {
        if (news) {
          console.log("From Cache", isoDatePlus);
          res.send(news.data);
        } else {
          newsapi.v2
            .newsapi.v2.everything(newsSearchQuery)
            .then(response => {

              newsSearchQuery

              let newNews = {
                id: req.query.id,
                user: "admin",
                name: req.query.id,
                country: "us",
                data: response
              };

              NewsCache.updateOne({ id: req.query.id }, {...newsSearchQuery,data:response.data}, {
                upsert: true
              })
                .then(t => {
                  console.log("From API", isoDatePlus);
                  res.send(response);
                })
                .catch(err => {
                  console.log(err);
                });
            });
        }
      })
      .catch(err => {
        res.status(500).send({ message: "An error occured" });
      });
 */



  newsapi.v2.everything(newsSearchQuery)
  .then(response => {
    
    res.send(response);
  });

    
});

router.get('/world-news', function(req, res, next) { 


 
var isoDatePlus = new Date(new Date().getTime() - 30*60000).toISOString(); // current Date + 15 minutes ISODATE format

let findQuery = {
              $and: [
                { id: req.query.id },
                { updatedAt: { $gt: isoDatePlus } }
              ]
            }


  NewsCache.findOne(findQuery)
      .then(news => {
        if (news) {
          console.log("From Cache", isoDatePlus);
          res.send(news.data);
        } else {
          newsapi.v2
            .topHeadlines({
              country: "us",
              pageSize: 100,
              category: req.query.id
            })
            .then(response => {

              let newNews = {
                id: req.query.id,
                user: "admin",
                name: req.query.id,
                country: "us",
                data: response
              };
              NewsCache.updateOne({ id: req.query.id }, newNews, {
                upsert: true
              })
                .then(t => {
                  console.log("From API", isoDatePlus);
                  res.send(response);
                })
                .catch(err => {
                  console.log(err);
                });
            });
        }
      })
      .catch(err => {
        res.status(500).send({ message: "An error occured" });
      });

});
 


router.get('/landingPage', function(req, res, next) { 

  var isoDatePlus = new Date(new Date().getTime() - 1440*60000).toISOString(); // current Date + 24h ISODATE format

  var theState = {
    data:null,
    category:[],
    language:[],
    country:[],
    sources:null,
    config:{
      language: "en"
    }
  }

  /* Set Sources */
  var isoDatePlus = new Date(new Date().getTime() - 525600*60000).toISOString(); // current Date + 24h ISODATE format
  let findQuerySource = {
    $and: [
      { id: "sources" },
      { updatedAt: { $gt: isoDatePlus } }
    ]
  }
  
  NewsCache.findOne(findQuerySource)
    .then(sources => {

      if (sources) {
        console.log("Sources From Cache", isoDatePlus);
        theState.sources = sources.data;
        return theState;

      }else{
        
        newsapi.v2.sources({
        })
          .then(response => {

            let newSources = {
              id: "sources",
              user: "admin",
              name: "sources",
              data: response.sources
            }

            return newSources;
          })

          .then((newSources) => {            
            NewsCache.updateOne({ id: "sources" }, newSources, {
              upsert: true
            })
              .then(() => {
                console.log("Sources From API", isoDatePlus);
              })
              .catch(err => {
                console.log(err);
              });
              return newSources
          }).then((newSources)=>{
            theState.sources = newSources.data;
          })
          return theState
      }
    })    
    .then((theState) => {
      
      if (theState.sources) {

        theState.sources.map((source) => {
          if (theState.category.indexOf(source.category) === -1) {
            theState.category.push(source.category);
          }
          if (theState.language.indexOf(source.language) === -1) {
            theState.language.push(source.language);
          }
          if (theState.country.indexOf(source.country) === -1) {
            theState.country.push(source.country);
          }
        })

        /* Last news */
        let findQuery = {
          $and: [
            { id: "landingPage" },
            { updatedAt: { $gt: isoDatePlus } }
          ]
        }

        NewsCache.findOne(findQuery)
          .then(news => {
            if (news) {
              console.log("News From Cache", isoDatePlus);
              //res.send(news.data);
              theState.data = news.data
              res.send(theState);
            } else {

              newsapi.v2
                .topHeadlines({
                  language: "en",
                  pageSize: 100
                })
                .then(response => {
                  let newNews = {
                    id: "landingPage",
                    user: "admin",
                    name: "landingPage",
                    language: "en",
                    data: response
                  };
                  
                  NewsCache.updateOne({ id: "landingPage" }, newNews, {
                    upsert: true
                  })
                  .then(t => {
                    
                      console.log("News From API", isoDatePlus);
                      /* res.send(response); */
                      theState.data = response
                      res.send(theState);
                      
                                     
                    })
                    .catch(err => {
                      console.log(err);
                    });
                });

            }
          })
          .catch(err => {
            res.status(500).send({ message: "An error occured" });
          });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "An error occured" });
    });

  });

  

  router.post("/add-read-later", (req, res) => {
    let articleToReadLater = req.body.articleDetails
    let id = mongoose.Types.ObjectId(req.session.currentUser._id);

    UserDB.updateOne({ _id: id }, { $addToSet: { readLater: articleToReadLater } }, {
      upsert: true
    })
      .then(addedArticle => {
        console.log("added", addedArticle);
        res.status(200).send(addedArticle);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({message:"server error"});
      }); 

    
      
    });

    router.get("/remove-read-later-item", (req, res) => {

      let itemToRemove = req.query.url
      let userId = mongoose.Types.ObjectId(req.session.currentUser._id);
  
      UserDB.findOneAndUpdate({ _id: userId }, { $pull: { readLater:{ url: itemToRemove } } },
        { multi: true,
          new: true })
        .select("-password")
        .then(updatedUser => {
          req.session.currentUser = updatedUser;
          res.status(200).send({response: "ok", user: updatedUser});
        })
        .catch(err => {
          console.log(err);
          res.status(500).send({message:"server error"});
        }); 
  
      
        
      });
  

  




module.exports = router;