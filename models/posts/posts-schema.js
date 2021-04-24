const mongoose = require('mongoose')
const postsSchema = mongoose.Schema(
    {
        _id: String,
        imageUrl: URL,
        likedByUsers: [{
                type: String,
                ref: 'UsersModel'
        }],
        originalPoster: {
                type: String,
                ref: 'UsersModel'
        },
        commentIds: [{
                type: String,
                ref: 'CommentsModel'
        }]
    }, {collection: "posts"})

module.exports = postsSchema