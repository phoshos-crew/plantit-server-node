const mongoose = require('mongoose')
const groupsSchema = mongoose.Schema(
    {
        _id: String,
        groupName: String,
        groupDesc: String,
        groupMembers: [{
                type: String,
                ref: 'UsersModel'
        }],
        groupPicture: String,
        groupPosts: [{
                type: String,
                ref: 'PostsModel'
        }],
        groupAdmins: [{
                type: String,
                ref: 'UsersModel'
        }]
    }, {collection: "groups"})

module.exports = groupsSchema