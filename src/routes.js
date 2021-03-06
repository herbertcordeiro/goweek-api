const express = require("express");

const routes = express.Router();

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');


routes.get('/tweets', TweetController.listTweet); 
routes.post('/tweets', TweetController.createTweet); 
routes.post('/likes/:id', LikeController.addLike); 

module.exports = routes;