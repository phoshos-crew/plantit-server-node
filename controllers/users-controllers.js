module.exports = (app) => {
    const usersService = require("../services/users-service")

    const register = (req, res) => {
        const user = req.body;
        usersService.register(user)
            .then((actualUser) => {
                req.session['currentUser'] = actualUser
                res.send(actualUser)
            })
    }

    const login = (req, res) => {
        usersService.login(req.body.username, req.body.password)
            .then((actualUser) => {
                if (actualUser) {
                    req.session["currentUser"] = actualUser
                    res.send(actualUser)
                } else {
                    res.sendStatus(403)
                }
            })
    }

    const logout = (req, res) => {
        delete req.session.currentUser
        res.sendStatus(200)
    }

    const profile = (req, res) => {
        const currentUser = req.session["currentUser"]
        if (currentUser) {
            res.send(currentUser)
        } else {
            res.sendStatus(403)
        }
    }

    app.post("/api/register", register)
    app.post("/api/login", login)
    app.post("/api/logout", logout)
    app.post("/api/profile", profile)
}