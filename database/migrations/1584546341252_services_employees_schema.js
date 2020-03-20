'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicesEmployeesSchema extends Schema {
  up () {
    this.create('services_employees', (table) => {
      table.increments()
      table.integer('service_id').notNullable()
      table.string('employee_id', 15).notNullable()
      table.integer('user_id').notNullable()
      table.string('reason_name', 30).notNullable()
      table.string('date', 15).notNullable()
      table.string('start', 10).notNullable()
      table.string('end', 10).notNullable()
      table.string('qtd_hours', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('services_employees')
  }
}

module.exports = ServicesEmployeesSchema
