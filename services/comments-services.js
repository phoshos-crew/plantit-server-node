const commentsDao = require('../daos/comments-dao')

const findCommentsForPost = (postId, res) => {
    return commentsDao.findCommentsForPost(postId)
        .then((comments) => {
            if (comments) {
                return comments
            } else {
                res.sendStatus(404)
            }
        })
}

const createComment = (postId, comment) => {
    return commentsDao.createComment(postId, comment)
}

const deleteComment = (commentId) => {
    return commentsDao.deleteComment(commentId)
}

const updateComment = (cid, comment) => {
    return commentsDao.updateComment(cid, comment)
}

module.exports = {
    findCommentsForPost,
    deleteComment,
    updateComment,
    createComment
}