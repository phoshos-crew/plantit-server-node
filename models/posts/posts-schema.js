const mongoose = require('mongoose')
const postsSchema = mongoose.Schema(
    {
        _id: String,
        type: {type: String, enumerable: ["POST", "GROUP_POST"]},
        imageUrl: URL,
        likedByUsers: [String],
        postedByUser: String,
        postedByGroup: String
    }, {collection: "posts"})

module.exports = postsSchema