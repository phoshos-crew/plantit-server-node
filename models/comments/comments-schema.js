const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema(
    {
        _id: String,
        postId: String,
        likedByUsers: [String],
        originalPoster: String,
        commentBody: String
    }, {collection: "groups"})

module.exports = commentsSchema