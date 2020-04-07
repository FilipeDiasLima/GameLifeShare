exports.up = function(knex) {
    return knex.schema.createTable('files', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.integer('postId').notNullable();
        
        table.foreign('postId').references('id').inTable('posts');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('files');
};
