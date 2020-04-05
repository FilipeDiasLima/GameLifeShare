const bcrypt = require('bcryptjs');

async function checkPassword(reqPass, userPass){
    const validPass = await bcrypt.compare(reqPass, userPass);

    return validPass;
}

module.exports = checkPassword;