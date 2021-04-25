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

const findAllPosts = (res) => {
    return postsDao.findAllPosts()
        .then((posts) => {
            if(posts) {
                return posts
            } else {
                res.sendStatus(404)
            }
        })
}

const findPostById = (pid, res) => {
    return postsDao.findPostById(pid)
        .then((post) => {
            if (post) {
                return post
            } else {
                res.sendStatus(404)
            }
        })
}

module.exports = {
    findPostsForUser,
    findAllPosts,
    findPostById
}