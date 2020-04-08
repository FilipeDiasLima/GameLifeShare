const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { originalname, size, filename, path } = request.file;

        const [id] = await connection('files').insert({
            name: originalname,
            key: filename,
            size,
            url: path,
        })

        response.json({ id, originalname, path });
    }
}