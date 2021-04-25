const postsModel = require('../models/posts/posts-model')

const findPostsForUser = (userId) => {
    return postsModel.find({originalPoster: userId});
}
X
const findAllPosts = () => {
    return postsModel.find();
}

const findPostById = (pid) => {
    return postsModel.findById(pid)
}

module.exports = {
    findPostsForUser,
    findAllPosts,
    findPostById
}