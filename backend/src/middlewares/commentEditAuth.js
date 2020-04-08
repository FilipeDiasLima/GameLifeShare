const connection = require('../database/connection');

async function commentEditAuth(req, res, next){
    const userId  = req.userId;
    const { id } = req.params;

    const comment = await connection('comments')
        .select('*')
        .where({
            id,
            userId
        })
        .first();
    
    if(!comment){
        return res.status(401).json({ error: 'Unauthorized'});
    }

    return next();
}

module.exports = commentEditAuth;