const express = require("express");
const jwt = require('jsonwebtoken')
const app = express();

app.post("/auth/login", function(req, res) {
  // always reutn success
  const payload = {
    id : 1,
    email: req.email
  }
  const token = jwt.sign(payload,'secret')
  return res.json({token})
});

app.get('/auth/user/',(req,res) => {

  const bearToken = req.headers['authorization']
  const bearer = bearToken.split(' ')
  const token = bearer[1]

  jwt.verify(token,'secret',(err,user)=>{
    if(err){
      return res.sendStatus(403)
    }else{
      return res.json({
            user
          });
    }
  })
});

app.post("/auth/logout", function(req, res) {
  // this function triggered when user click on logout button.
  return res.sendStatus(200);
});

module.exports = {
  path: "/api/",
  handler: app
};