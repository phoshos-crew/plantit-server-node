const usersModel = require("../models/users/users-model")
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
    return usersModel.create(user)
}

const addPlantOwned = (userId, plant) => {
    return usersModel.findOneAndUpdate(
        {_id: userId},
        {
            $push: {
                plantsOwned: {plantId: plant}
            }},
        {returnOriginal: false, useFindAndModify: false})
}

const findAllCropUsers = (plantId) => {
    return usersModel.find({
        "plantsOwned.plantId" :
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