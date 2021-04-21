const mongoose = require('mongoose')
const groupsSchema = require('./groups-schema')
const groupsModel = mongoose.model("GroupsModel", groupsSchema)

module.exports = groupsModel