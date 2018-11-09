const Tweet = require('../models/Tweet');

module.exports = {
    async listTweet(req, res) {
        const tweets = await Tweet.find({}).sort("-createdAt");
        return res.json(tweets);
    },

    async createTweet(req, res) {
        const tweet = await Tweet.create(req.body);
        return res.json(tweet);
    }

}