'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Employee extends Model {
  static get hidden () {
    return ['admission', 'cpf', 'created_at', 'updated_at']
  }
}

module.exports = Employee
