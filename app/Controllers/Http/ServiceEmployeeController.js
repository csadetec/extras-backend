'use strict'
const ServiceEmployee = use('App/Models/ServiceEmployee')
//const {formatDate} = use('utils/')
class ServiceEmployeeController {

  async index({ params }) {

    const { start, end } = params

    return await ServiceEmployee.query()
      .select(['employee_id', 'service_id', 'reason_name', 'date', 'qtd_hours'])
      .with('employee')
      .leftJoin('employees', 'services_employees.employee_id', 'employees.id')
      .orderBy('employees.name', 'asc')
      .fetch()
    /** */
  }

  async filter() {
    return await ServiceEmployee.query()
      .whereBetween('date', [start, end])
      .with('employee')
      .fetch()
    /** */
    //return teste
  }


  async show() {
    return { msg: 'method show' }
  }

  async store(user_id, service_id, date, employees) {


    await ServiceEmployee.query()
      .where({ service_id })
      .delete()
    for (let r of employees) {
      const employee = await this.availability(r.id, date, r.start, r.end)
      if (employee) {
        return employee
      }
      await ServiceEmployee.create({ user_id, service_id, employee_id: r.id, reason_name: r.reason_name, date, start: r.start, end: r.end, qtd_hours: r.qtd_hours })
    }
  }

  async availability(employee_id, date, start, end) {

    const employee = await ServiceEmployee.findBy({ employee_id, date })

    if (!employee) {
      return false
    }
    //if(employee.start)
    if (employee.start <= start && start <= employee.end) {
      return employee
    }
    if (employee.start <= end && end <= employee.end) {
      return employee
    }
    if (start <= employee.start && employee.start <= end) {
      return employee
    }
    if (start <= employee.end && employee.end <= end) {
      return employee
    }

    return false

  }




}

module.exports = ServiceEmployeeController
