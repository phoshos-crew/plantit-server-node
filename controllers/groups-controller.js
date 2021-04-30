module.exports = (app) => {
    const groupsService = require("../services/groups-service")


    const profile = (req, res) => {
        const currentGroup = req.session["currentGroup"]
        if (currentGroup) {
            res.send(currentGroup)
        } else {
            res.sendStatus(403)
        }
    }


    const groupById = (req, res) => {
        const groupId = req.params["groupId"]
        groupsService.findGroupById(groupId)
            .then((groupFound) => {
                if(groupFound) {
                    res.send(groupFound)
                } else {
                    res.sendStatus(404)
                }
            })
    }

    const groupByName = (req, res) => {
        const groupName = req.params["groupName"]
        groupsService.findGroupByGroupName(groupName)
            .then((groupFound) => {
                if (groupFound) {
                    res.send(groupFound)
                } else {
                    res.sendStatus(404)
                }
            })
    }

    app.post("/api/profile", profile)
    app.get("/api/groups/:groupId", groupById)
    app.get("/api/groups/name/:groupName", groupByName)
}