const postsModel = require('../models/posts/posts-model')

const findPostsForUser = (userId) => {
    return postsModel.find({originalPoster: userId})
        .populate('likedByUsers')
        .populate({
            path: 'commentIds',
            populate: [{
                path: 'originalPoster'
            }, {
                path: 'likedByUsers'
            }]
        })
        .populate('originalPoster')
        .exec();
}

module.exports = {
    findPostsForUser
}