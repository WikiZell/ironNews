var express = require('express');
var router = express.Router();
var bcrypt = require("bcrypt")
var UserDB = require("../models/Users")
var mongoose = require("mongoose")


router.post('/login', function(req, res, next) {

    /* username, password */
    let username = req.body.username,
      password = req.body.password;
    
    UserDB.findOne({ username: username })
      .then(user => {
        if (!user) {
          //No user in database
          res.status(403).json({ message: "Username not present" });
        } else {
          //User found proceed with authentication
          bcrypt.compare(password, user.password, function(err, equal) {
            if (equal) {
              //Password match
              user = JSON.parse(JSON.stringify(user));
              delete user.password;
              
              req.session.currentUser = user;
              res.status(200).send({ message: "User logged", data: user});
            } else {
              res.status(403).send({ message: "Invalid credentials" });
            }
          });
        }
      })
      .catch(err => {
        res.status(500).send({ message: "An error occured" });
      });

  });

router.post("/signup", function(req, res, next) {
  /* username, password, fullName, image */

  let newUser = new UserDB(
    {
      username: req.body.username,
      password: req.body.password,
      fullName: req.body.fullName,
      image: req.body.image || "",
    },
    { versionKey: false }
  );
  
  UserDB.find({ username: newUser.username }).then(user => {
    if (user.length > 0)
      res.status(403).json({ message: "Username already taken" });
    else {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if (err) res.status(500).json({ message: err });
          else {
            newUser.password = hash;
            UserDB.create(newUser)
              .then((user) => {
                user = JSON.parse(JSON.stringify(user));
                delete user.password;
                req.session.currentUser = user;
                res.status(200).json({ message: "Account created!", data: user });
              })
              .catch(err => {
                res.status(500).json({ message: err.message });
              });
          }
        });
      });
    }
  });

});

router.get('/isLogged', function (req, res, next) {
  if (req.session.currentUser) {
    res.status(200).json(req.session.currentUser)
  } else {
    res.status(403).json({ message: "Not loggedIn" });
  }

});

router.post('/upload', function(req, res, next) {

    res.status(200).json({message: "User updated"})
});

router.post("/isUserAvailable", async function (req, res, next) {

  UserDB.isAvailable(req.body.username)
    .then((available) => {
      if (available) {
        res.status(200).json({ message: "Username available." });
      } else {
        res.status(403).json({ message: "Username already taken." });
      }
    });

})

router.post("/edit", async function(req, res, next) {
  /* username, name, image */

  if (req.session.currentUser) {
    let id = mongoose.Types.ObjectId(req.session.currentUser._id);
    UserDB.findOne({ _id: id }).then(user => {      
      UserDB.isAvailable(req.body.username)
      .then((available)=> {
        if(available || req.body.username == req.session.currentUser.username){
          UserDB.findOneAndUpdate(
            { _id: id },
            { $set: req.body },
            { fields: { password: -1 },
              new: true },
          ).select("-password").then(user => {
            req.session.currentUser = user._doc;
            res.status(200).json({ message: "User updated", data: req.session.currentUser }); 
          }).catch(err => {
            res.status(500).json({ message: err.message });
            
          })
        }else{
          res.status(403).json({ message: "Username already taken" });
        }
      });
    })
  }else{
    res.status(403).json({ message: "Not Logged In" });
  }
});

router.get('/logout', function(req, res, next) { 

  if (req.session.currentUser) {
    req.session.destroy((err) => {
      if (err) res.status(403).json({ message: "Error on Logout" })
      else res.status(200).json({ message: "OK" })
    })
    
  } else {
    res.status(403).json({ message: "Error you are not loggedIn" })
  }
});

router.get('/loggedin', function(req, res, next) {
    res.status(200).json({message: "User logged"})
});

module.exports = router;