const usersModel = require("../models/users/users-model")
const mongoose = require("mongoose")

const findAllUsers = () => {
    return usersModel.find();
}

const findUserById = (userId) => {
    return usersModel.findById(userId);
}

const findUserByUsername = (username) => {
    return usersModel.findOne({username: username});
}

const findUserByCredentials = (username, password) => {
    return usersModel.findOne({
        username: username,
        password: password
    });
}

const createUser = (user) => {
    return usersModel.create(
        {
            _id: new mongoose.Types.ObjectId().toHexString(),
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            role: user.role
        }).then(user => user)
}

const addPlantOwned = (userId, plant) => {
    return usersModel.findOneAndUpdate(
        {_id: userId},
        {
            $push: {
                plantsOwned: {plantId: plant}
            }
        },
        {returnOriginal: false, useFindAndModify: false})
}

const findAllCropUsers = (plantId) => {
    return usersModel.find({
        "plantsOwned.plantId":
            {$all: [plantId]}
    })
}

module.exports = {
    findUserById,
    findUserByUsername,
    findUserByCredentials,
    createUser,
    findAllUsers,
    addPlantOwned,
    findAllCropUsers
}