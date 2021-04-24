const commentsModel = require('../models/comments/comments-model')

const findAllComments = () => {
    return commentsModel.find();
}

const findCommentsForUser = (userId) => {
    return commentsModel.findOne({originalPoster: userId})
        .populate('comments')
}

const findCommentById = (cid) => {
    return commentsModel.findById(cid)
}

const createComment = (userId, comment) => {
    return commentsModel.create(
        {
            postId: comment.postId, likedByUsers: comment.likedByUsers, originalPoster: comment.originalPoster,
            body: comment.body
        })
}

const updateComment = (cid, newBody) => {
    return commentsModel.updateOne({_id: cid}, {$set: {body: newBody}})
}

const deleteAllCommentsForUser = (userId) => {
    return commentsModel.deleteMany({originalPoster: userId})
}

const deleteOneCommentForUser = (userId, cid) => {
    return commentsModel.deleteOne({originalPoster: userId, _id: cid})
}

module.exports = {
    findAllComments,
    findCommentsForUser,
    findCommentById,
    createComment,
    deleteAllCommentsForUser,
    deleteOneCommentForUser
}