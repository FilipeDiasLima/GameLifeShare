const bcrypt = require('bcryptjs');

async function hashPassword(password){
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    return hashedPass;
}

module.exports = hashPassword;