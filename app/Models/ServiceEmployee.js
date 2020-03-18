'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ServiceEmployee extends Model {
  static get table(){
    return 'services_employees'
  }
  employee(){
    return this.belongsTo('App/Models/Employee')
  }
}

module.exports = ServiceEmployee
