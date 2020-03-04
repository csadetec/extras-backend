'use strict'
const Employee = use('App/Models/Employee')

class EmployeeController {
  
  async index ({ request, response, view }) {
    
    return await Employee.query()
      .orderBy('position', 'asc')
      .orderBy('name', 'asc')
      .fetch()
  }


  async store ({ request, response }) {
    
  }

  async show ({ params, request, response, view }) {
    return await Employee.findBy({rc:params.rc})
  }

  async update ({ params, request, response }) {
  }

  /**
   * Delete a employee with id.
   * DELETE employees/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = EmployeeController
