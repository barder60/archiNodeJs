const User = require('../../domain/User/User');

module.exports = (firstName, lastName, email, {userRepository}) +> {
	const user = new User(null, firstName, lastName, email);
	return userRepository.persist(user)
};