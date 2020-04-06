const connection = require('../database/connection');

const userAlreadyExists = async ({username}) => {
    const userExist = await connection('users')
        .select('*')
        .where('username', username)
        .first()

    return userExist;
}

module.exports = userAlreadyExists;