const commentsDao = require('../daos/comments-dao')

const findCommentsForUser = (userId, res) => {
    return commentsDao.findCommentsForUser(userId)
        .then((comments) => {
            if (comments) {
                return comments
            } else {
                res.sendStatus(404)
            }
        })
}

module.exports = {
    findCommentsForUser
}