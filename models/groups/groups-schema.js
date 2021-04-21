const mongoose = require('mongoose')
const groupsSchema = mongoose.Schema(
    {
        _id: String,
        groupName: String,
        groupDesc: String,
        groupMembers: [String],
        groupPictures: [String],
        groupPosts: [String],
        groupComments: [String],
        groupAdmins: [String]
    }, {collection: "groups"})

module.exports = groupsSchema