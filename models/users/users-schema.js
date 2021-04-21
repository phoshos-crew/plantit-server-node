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
        usersFollowed: [String],
        groupMemberships: [String]
    }, {collection: "users"})

module.exports = usersSchema