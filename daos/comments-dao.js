const commentsModel = require('../models/comments/comments-model')
const mongoose = require('mongoose')

const findAllComments = () => {
    return commentsModel.find();
}

const findCommentsForPost = (postId) => {
    return commentsModel.find({postId: postId})
        .populate('likedByUsers')
        .populate('originalPoster')
        .exec()
}

const findCommentById = (cid) => {
    return commentsModel.findById(cid)
}

const createComment = (postId, comment) => {
    return commentsModel.create(
        {
            _id: new mongoose.Types.ObjectId().toHexString(),
            postId: postId,
            likedByUsers: [],
            originalPoster: comment.originalPoster,
            commentBody: comment.commentBody

        }
    ).then(newComment => commentsModel.findById(newComment._id)
        .populate('originalPoster')
        .exec())
}

const updateComment = (cid, newBody) => {
    return commentsModel.updateOne(
        {_id: cid},
        {$set: {body: newBody}}
    ).then(updatedComment => commentsModel.findById(updatedComment._id)
        .populate('likedByUsers')
        .populate('originalPoster')
        .exec())
}

const deleteComment = (cid) => {
    return commentsModel.deleteOne({_id: cid})
}

const deleteAllCommentsForUser = (userId) => {
    return commentsModel.deleteMany({originalPoster: userId})
}

const deleteOneCommentForUser = (userId, cid) => {
    return commentsModel.deleteOne({originalPoster: userId, _id: cid})
}

module.exports = {
    findAllComments,
    findCommentsForPost,
    findCommentById,
    createComment,
    deleteAllCommentsForUser,
    deleteOneCommentForUser,
    deleteComment,
    updateComment
}