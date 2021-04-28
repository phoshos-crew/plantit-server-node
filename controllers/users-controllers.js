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
        const credentials = req.body.credentials;
        usersService.login(credentials.username, credentials.password)
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
        req.session.destroy()
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

    const plant = (req, res) => {
        const userId = req.params["userId"]
        const plantToAdd = req.body.plantId;
        usersService.addPlantOwned(userId, plantToAdd)
            .then((updatedList) => {
                if (updatedList) {
                    res.send(updatedList)
                } else {
                    res.sendStatus(403)
                }
            })
    }

    const userById = (req, res) => {
        const userId = req.params["userId"]
        usersService.findUserById(userId)
            .then((userFound) => {
                if(userFound) {
                    res.send(userFound)
                } else {
                    res.sendStatus(404)
                }
            })
    }

    const userByName = (req, res) => {
        const userName = req.params["userName"]
        usersService.findUserByUserName(userName)
            .then((userFound) => {
                if (userFound) {
                    res.send(userFound)
                } else {
                    res.sendStatus(404)
                }
            })
    }

    const cropUsers = (req, res) => {
        const plantId = req.params["plantId"]
        usersService.findAllCropUsers(plantId)
            .then((usersMatched) => {
                if (usersMatched) {
                    res.send(usersMatched)
                } else {
                    res.sendStatus(404)
                }
            })
    }

    app.post("/api/register", register)
    app.post("/api/login", login)
    app.post("/api/logout", logout)
    app.post("/api/profile", profile)
    app.put("/api/users/:userId", plant)
    app.get("/api/users/:userId", userById)
    app.get("/api/users/name/:userName", userByName)
    app.get("/api/plants/:plantId", cropUsers)
}