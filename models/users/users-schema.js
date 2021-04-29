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
        plantsOwned: [{plantId: String, _id: false}]
    }, {collection: "users"})

module.exports = usersSchema