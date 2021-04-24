const postsDao = require("../daos/posts-dao")

const findPostsForUser = (userId, res) => {
    return postsDao.findPostsForUser(userId)
        .then((posts) => {
            if(posts) {
                return posts
            } else {
                res.sendStatus(403)
            }
        })
}

module.exports = {
    findPostsForUser
}