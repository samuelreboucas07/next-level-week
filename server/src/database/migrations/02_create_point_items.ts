import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points'); //Chave estrangeira da tabela points, campo id.
        table.integer('item_id').notNullable().references('id').inTable('items'); //Chave estrangeira da tabela items, campo id.
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('point_items');
}