const mongoose = require('mongoose')
const commentsSchema = mongoose.Schema(
    {
        _id: String,
        posterType: {String, enumerable: ["USER", "GROUP"]},
        likedByUsers: [String],
        originalPoster: String,
    }, {collection: "groups"})

module.exports = commentsSchema