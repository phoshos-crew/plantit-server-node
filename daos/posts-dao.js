const postsModel = require('../models/posts/posts-model')

const findPostsForUser = (userId) => {
    return postsModel.find({originalPoster: userId});
}

module.exports = {
    findPostsForUser
}