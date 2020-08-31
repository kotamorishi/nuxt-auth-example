const express = require("express")
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const app = express();

const secretKey = "thisKeyUsedForToken";

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.post("/auth/login", function(req, res) {

  if(req.body.email == "test"){
    return res.sendStatus(403);
  }
  // always reutn success
  const payload = {
    id : 1,
    email: req.email
  }
  const token = jwt.sign(payload, secretKey)
  return res.json({token})
});

app.get('/auth/user/',(req,res) => {

  const bearToken = req.headers['authorization']
  const bearer = bearToken.split(' ')
  const token = bearer[1]

  jwt.verify(token, secretKey,(err,user)=>{
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