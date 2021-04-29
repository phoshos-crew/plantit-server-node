const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema(
    {
        _id: String,
        type: {type: String, default: 'comment'},
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
        body: String
    },
    { timestamps: true},
    {collection: "comments"})

module.exports = commentsSchema