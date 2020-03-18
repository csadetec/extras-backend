'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeesSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      //table.increments()
      table.string('id', 15).notNullable().unique()
      table.string('name', 150).notNullable()
      table.string('function', 150).notNullable()
      table.string('admission', 15).notNullable()
      table.string('cpf', 15).notNullable()
      table.string('description').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeesSchema
