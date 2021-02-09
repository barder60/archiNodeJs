const User = require('../../domain/User/User');

const createUser = (firstName, lastName, email, {userRepository}) => {
    const user = new User(null, firstName, lastName, email);
    return userRepository.persist(user)
};

const deleteUser = (userId, {userRepository}) => {
    return userRepository.remove(userId);
};

const getUser = (userId, {userRepository}) => {
    return userRepository.get(userId);
};

const listUser = ({userRepository}) => {
    return userRepository.find()
}

module.exports (
    createUser,
    deleteUser,
    getUser,
    listUser
)