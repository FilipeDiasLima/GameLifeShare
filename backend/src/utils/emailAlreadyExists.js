const connection = require('../database/connection');

const emailAlreadyExists = async ({email}) => {
    const emailExist = await connection('users')
        .select('*')
        .where('email', email)
        .first()

    return emailExist;
}

module.exports = emailAlreadyExists;