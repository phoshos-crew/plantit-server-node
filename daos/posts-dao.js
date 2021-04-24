const postsModel = require('../models/posts/posts-model')

const findPostsForUser = (userId) => {
    return postsModel.find({originalPoster: userId})
        .populate('likedByUsers')
        .populate('commentIds')
        .populate('originalPoster')
        .exec();
}

module.exports = {
    findPostsForUser
}