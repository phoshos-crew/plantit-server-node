const mongoose = require('mongoose')
const usersSchema = mongoose.Schema(
    {
        _id: String,
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        role: {type: String, enumerable: ["SITE_ADMIN", "GROUP_ADMIN", "GENERAL_USER"]},
        usersFollowed: [{
                type: String,
                ref: 'UsersModel'
        }],
        groupMemberships: [{
                type: String,
                ref: 'GroupsModel'
        }],
        comments: [{
                type: String,
                ref: 'CommentsModel'
        }],
        posts: [{
                type: String,
                ref: 'PostsModel'
        }]
    }, {collection: "users"})

module.exports = usersSchema