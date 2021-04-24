module.exports = (app) => {
    const commentsService = require('../services/comments-services')

    app.get('/api/users/:userId/comments', (req, res) =>
        commentsService.findCommentsForUser(req.params['userId'], res)
            .then(comments => res.send(comments)))
}