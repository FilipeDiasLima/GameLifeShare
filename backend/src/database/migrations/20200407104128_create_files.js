exports.up = function(knex) {
    return knex.schema.createTable('files', function(table){
        table.increments();
        table.string('name').notNullable();
        table.text('key').notNullable();
        table.integer('size').notNullable();
        table.text('url').notNullable();
        table.integer('postId').notNullable();
        
        table.foreign('postId').references('id').inTable('posts');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('files');
};
