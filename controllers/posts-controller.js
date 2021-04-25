module.exports = (app) => {
    const postsService = require("../services/posts-service")

    app.get('/api/users/:userId/posts', (req, res) =>
        postsService.findPostsForUser(req.params.userId, res)
            .then(posts => res.send(posts)))

    app.get('/api/posts', (req, res) =>
        postsService.findAllPosts(res)
            .then(posts => res.send(posts)))

    app.get('/api/posts/:pid', (req, res) =>
        postsService.findPostById(req.params['pid'])
            .then(post => res.send(post)))


}