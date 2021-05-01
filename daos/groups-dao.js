const groupsModel = require("../models/groups/groups-model")

const findAllGroups = () => {
    return groupsModel.find();
}

const findGroupById = (groupId) => {
    return groupsModel.findById(groupId)
        .populate("groupMembers")
        .exec();
}

const findGroupByGroupName = (groupName) => {
    return groupsModel.findOne({groupName: groupName});
}

const createGroup = (group) => {
    return groupsModel.create(group)
}

const findAllGroupMembers = (groupId) => {
    return groupsModel.findById(groupId).select("groupMembers")
        .populate("groupMembers")
        .exec()
}

module.exports = {
    findAllGroups,
    findGroupById,
    findGroupByGroupName,
    createGroup,
    findAllGroupMembers
}