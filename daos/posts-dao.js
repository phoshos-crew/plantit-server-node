const postsModel = require('../models/posts/posts-model')
const commentsModel = require('../models/comments/comments-model')
const mongoose = require('mongoose')

const findAllPosts = () => {
    return postsModel.find();
}

const findPostsForUser = (userId) => {
    return postsModel.find({originalPoster: userId});
}

const findPostById = (pid) => {
    return postsModel.findById(pid)
}

const createPost = (post) => {
    return postsModel.create(
        {
            _id: new mongoose.Types.ObjectId().toHexString(),
            imageUrl: post.imageUrl,
            likedByUsers: [],
            originalPoster: post.originalPoster,
            commentIds: []
        }
    ).then(newPost => postsModel.findById(newPost._id)
        .populate('originalPoster')
        .exec())
}

const updatePost = (pid, newPost) => {
    return postsModel.findOneAndUpdate(
        {_id: pid},
        {$set: newPost},
        {returnOriginal: false, useFindAndModify: false})
        .then(updatedPost => postsModel.findById(updatedPost._id)
            .populate('likedByUsers')
            .populate('originalPoster')
            .populate('commentIds')
            .exec())
}

const deletePost = (pid) => {
    return postsModel.findOneAndDelete({_id: pid})
        .then(() => commentsModel.deleteMany(
            {postId: pid}))
}

module.exports = {
    findPostsForUser,
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}