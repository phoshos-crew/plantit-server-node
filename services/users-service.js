const usersDao = require("../daos/users-dao")
const register = (newUser, res) => {
    return usersDao.findUserByUsername(newUser.username)
        .then((existingUser) => {
            if(existingUser) {
                res.send(403)
            } else {
                return usersDao.createUser(newUser);
            }
        })
}

const login = (username, password) => {
    return usersDao.findUserByCredentials(username, password)
        .then((user) => {
            return user
        })
}

const findAllUsers = () => {
    return usersDao.findAllUsers();
}

const findUserById = (userId) => {
    return usersDao.findUserById(userId)
        .then((user) => {
            return user
        })
}

const findUserByUserName = (username) => {
    return usersDao.findUserByUsername(username)
        .then((user) => {
            return user
        })
}

const addPlantOwned = (userId, plant) => {
    return usersDao.addPlantOwned(userId, plant)
        .then((updatedPlant) => {
            return updatedPlant
        })
}

const findAllCropUsers = (plantId) => {
    return usersDao.findAllCropUsers(plantId)
        .then((listOfUsers) => {
            return listOfUsers
        })
}

module.exports = {
    register,
    login,
    findAllUsers,
    findUserById,
    findUserByUserName,
    addPlantOwned,
    findAllCropUsers
};