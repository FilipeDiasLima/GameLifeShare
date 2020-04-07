exports.up = function(knex) {
    return knex.schema.createTable('posts', function(table){
        table.increments();
        table.string('title').notNullable();
        table.text('body').notNullable();
        table.specificType('createdAt', 'DATETIME(6)');
        table.string('userId').notNullable();
        table.string('fileId').notNullable();
        
        table.foreign('userId').references('id').inTable('user');
        table.foreign('fileId').references('id').inTable('files');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};
