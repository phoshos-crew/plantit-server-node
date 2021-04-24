const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema(
    {
        _id: String,
        postId: {
                type: String,
                ref: 'PostsModel'
        },
        likedByUsers: [{
                type: String,
                ref: 'UsersModel'
        }],
        originalPoster: {
                type: String,
                ref: 'UsersModel'
        },
        commentBody: String
    }, {collection: "comments"})

module.exports = commentsSchema