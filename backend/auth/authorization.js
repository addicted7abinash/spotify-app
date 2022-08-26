const express = require("express");
const axios = require("axios");
const router = express.Router();
var token;
const qs = require("qs");
const dotenv = require("dotenv").config();
router.get("/", ({ query: { code } }, res) => {
  const data = qs.stringify({
    grant_type: "authorization_code",
    code: code,
    redirect_uri: process.env.REDIRECT_URI,
  });
  const config = {
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization: "Basic " + process.env.BASE_64,
      "Content-type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  axios(config)
    .then(function (response) {
      token = response.data.access_token;
      console.log(token);
    })
    .then(res.redirect("http://localhost:5000/posts"))
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = {
  router: router,
  token: token,
};
