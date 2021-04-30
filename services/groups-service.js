const usersDao = require("../daos/groups-dao")

const findAllGroups = () => {
    return groupsDao.findAllGroups();
}

const findGroupById = (groupId) => {
    return groupsDao.findGroupById(groupId)
        .then((group) => {
            return group
        })
}

const findGroupByGroupName = (groupName) => {
    return groupsDao.findGroupByGroupName(groupName)
        .then((group) => {
            return group
        })
}


module.exports = {
    findAllGroups,
    findGroupById,
    findGroupByGroupName,
};