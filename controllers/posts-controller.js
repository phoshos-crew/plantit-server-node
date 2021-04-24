module.exports = (app) => {
    const postsService = require("../services/posts-service")

    app.get('/api/users/:userId/posts', (req, res) =>
        postsService.findPostsForUser(req.params.userId, res)
            .then(posts => res.send(posts)))
}