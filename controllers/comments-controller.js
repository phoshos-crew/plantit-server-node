module.exports = (app) => {
    const commentsService = require('../services/comments-services')

    app.get('/api/posts/:postId/comments', (req, res) =>
        commentsService.findCommentsForPost(req.params['postId'], res)
            .then(comments => res.send(comments)))

    app.post('/api/posts/:postId/comments', (req, res) =>
        commentsService.createComment(req.params['postId'], req.body)
            .then(comment => res.send(comment)))

    app.post('/api/comments/:commentId', (req, res) =>
        commentsService.updateComment(req.params['commentId'], req.body)
            .then(comment => res.send(comment)))

    app.delete('/api/comments/:commentId', (req, res) =>
        commentsService.deleteComment(req.params['commentId'])
            .then(comment => res.send(comment)))
}