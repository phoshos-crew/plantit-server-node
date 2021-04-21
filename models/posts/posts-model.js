const mongoose = require('mongoose')
const postsSchema = require('./posts-schema')
const postsModel = mongoose.model("PostsModel", postsSchema)

module.exports = postsModel