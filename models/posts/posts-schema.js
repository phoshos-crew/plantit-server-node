const mongoose = require('mongoose')
const postsSchema = mongoose.Schema(
    {
        _id: String,
        type: {type: String, default: 'post'},
        imageUrl: String,
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
    },
        { timestamps: true},
    {collection: "postsmodels"})

module.exports = postsSchema