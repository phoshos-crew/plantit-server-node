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

const createUser = (user) => {
    return usersDao.createUser(user);
}

const findAllUsers = () => {
    return usersDao.findAllUsers();
}


module.exports = {
    createUser,
    login,
    register,
    findAllUsers
};