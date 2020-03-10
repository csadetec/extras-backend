'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.string('date', 15).notNullable()
      table.string('start', 10).notNullable()
      table.string('end', 10).notNullable()
      table.integer('user_id').notNullable()
      table.boolean('confirm').notNullable()
      table.string('reason_name', 150).notNullable()
      table.integer('reason_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServiceSchema