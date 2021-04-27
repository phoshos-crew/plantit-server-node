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

const createPost = (post, res) => {
    return postsDao.createPost(post)
        .then((post) => {
            if (post) {
                return post
            } else {
                res.sendStatus(404)
            }
        })
}

const updatePost = (pid, post, res) => {
    return postsDao.updatePost(pid, post)
        .then((updatedPost) => {
            if (updatedPost) {
                return updatedPost
            } else {
                res.sendStatus(400)
            }
        })
}

const deletePost = (pid, res) => {
    return postsDao.deletePost(pid)
        .then((deletedPost) => {
            if(deletedPost) {
                res.sendStatus(200)
            } else {
                res.sendStatus(400)
            }
        })
}

module.exports = {
    findPostsForUser,
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}