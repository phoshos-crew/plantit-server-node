const mongoose = require('mongoose')
const groupsSchema = mongoose.Schema(
    {
        _id: String,
        groupName: String,
        groupDesc: String,
        groupMembers: [String],
        groupPicture: URL,
        groupPosts: [String],
        groupAdmins: [String]
    }, {collection: "groups"})

module.exports = groupsSchema