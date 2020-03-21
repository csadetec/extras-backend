'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Service extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }
  employees(){
    return this
      .belongsToMany('App/Models/Employee')
      .pivotTable('services_employees')
      .withPivot(['reason_name', 'date', 'start', 'end', 'qtd_hours'])
  }
}

module.exports = Service
