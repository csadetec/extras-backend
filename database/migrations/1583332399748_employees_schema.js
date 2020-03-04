'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeesSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
      table.string('rc', 15).notNullable().unique()
      table.string('name', 150).notNullable()
      table.string('position', 150).notNullable()
      table.string('position_desc', 150).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeesSchema
