const connection = require('../database/connection');

async function postEditAuth(req, res, next){
    const userId  = req.userId;
    const { id } = req.params;

    const post = await connection('posts')
        .select('*')
        .where({
            id,
            userId
        })
        .first();
    
    if(!post){
        return res.status(401).json({ error: 'Unauthorized'});
    }

    return next();
}

module.exports = postEditAuth;