const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const dotenv = require('dotenv');

dotenv.config();

async function auth(req, res, next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({ error: 'Token not provided' });
    }

    const [, token] = authHeader.split(' ');

    try{
        const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);

        req.userId = decoded.id;

        return next();
    }catch(err){
        return res.status(401).json({ error: 'Invalid token' });
    }

}

module.exports = auth;