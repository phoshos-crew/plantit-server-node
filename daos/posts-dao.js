const postsModel = require('../models/posts/posts-model')
const commentsModel = require('../models/comments/comments-model')
const usersModel = require('../models/users/users-model')
const mongoose = require('mongoose')

const findAllPosts = () => {
    return postsModel.find();
}

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
            commentIds: []})
        .then(newPost => usersModel.findById({_id: post.originalPoster}).populate('posts', newPost).exec())
        // .then(newPost => postsModel.findById(newPost._id)
        //     .populate('originalPoster', {originalPoster: newPost.originalPoster})
        //     .exec())
        // .then(newPost => usersModel.findById({_id: newPost.originalPoster}).populate('posts').exec())

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