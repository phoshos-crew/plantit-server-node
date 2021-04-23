const mongoose = require('mongoose')
const postsSchema = mongoose.Schema(
    {
        _id: String,
        imageUrl: URL,
        likedByUsers: [String],
        originalPoster: String,
        commentIds: [String]
    }, {collection: "posts"})

module.exports = postsSchema