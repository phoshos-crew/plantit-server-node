const groupsModel = require("../models/groups/groups-model")

const findAllGroups = () => {
    return groupsModel.find();
}

const findGroupById = (groupId) => {
    return groupsModel.findById(groupId);
}

const findGroupByGroupName = (groupName) => {
    return groupsModel.findOne({groupName: groupName});
}

const createGroup = (group) => {
    return groupsModel.create(group)
}


module.exports = {
    findAllGroups,
    findGroupById,
    findGroupByGroupName,
    createGroup,
}