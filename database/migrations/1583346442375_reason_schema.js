'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReasonSchema extends Schema {
  up () {
    this.create('reasons', (table) => {
      table.increments()
      table.string('name', 150).notNullable().unique()
      table.string('follow', 150).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('reasons')
  }
}

module.exports = ReasonSchema
