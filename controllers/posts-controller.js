module.exports = (app) => {
    const postsService = require("../services/posts-service")

    app.get('/api/users/:userId/posts', (req, res) =>
        postsService.findPostsForUser(req.params['userId'], res)
            .then(posts => res.send(posts)))

    app.get('/api/posts', (req, res) =>
        postsService.findAllPosts(res)
            .then(posts => res.send(posts)))

    app.get('/api/posts/:postId', (req, res) =>
        postsService.findPostById(req.params['postId'])
            .then(post => res.send(post)))

    app.post('/api/posts', (req, res) =>
        postsService.createPost(req.body)
            .then(post => res.send(post)))

    app.put('/api/posts/:postId', (req, res) =>
        postsService.updatePost(req.params['postId'], req.body, res)
            .then(post => res.send(post)))

    app.delete('/api/posts/:postId', (req, res) =>
        postsService.deletePost(req.params['postId'], res)
            .then(status => res.send(status)))
}