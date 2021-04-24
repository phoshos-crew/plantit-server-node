const commentsModel = require('../models/comments/comments-model')

const findCommentsForUser = (userId) => {
    return commentsModel.find({originalPoster: userId});
}

module.exports = {
    findCommentsForUser
}