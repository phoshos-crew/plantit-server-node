const mongoose = require('mongoose')
const postsSchema = mongoose.Schema(
    {
        _id: String,
        imageUrl: URL,
        likedByUsers: [String],
        originalPoster: String,
        commentId: [String]
    }, {collection: "posts"})

module.exports = postsSchema