'use strict'
const Employee = use('App/Models/Employee')

class EmployeeController {
  
  async index ({ request, response, view }) {
    
    return await Employee.query()
      .where({description: 'ANALISTAS DE ÁREA DO CONHECIMENTO'})
      .orWhere({description: 'EDUCAÇÃO INFANTIL - 1º PERÍODO'})
      .orWhere({description: 'EDUCAÇÃO INFANTIL - 2º PERÍODO'})
      
      .orWhere({description: 'ENSINO FUNDAMENTAL I (1º ANO)' })
      .orWhere({description: 'ENSINO FUNDAMENTAL I (2º ANO)' })
      .orWhere({description: 'ENSINO FUNDAMENTAL I (4º ANO)' })
      .orWhere({description: 'ENSINO FUNDAMENTAL I (5º ANO)' })

      .orWhere({description: 'ENSINO FUNDAMENTAL II - (6º ANO)' })
      .orWhere({description: 'ENSINO FUNDAMENTAL II - (7º ANO)' })
      .orWhere({description: 'ENSINO FUNDAMENTAL II - (8º ANO)' })
      .orWhere({description: 'ENSINO FUNDAMENTAL II - (9º ANO)' })

      .orWhere({description: 'ENSINO MÉDIO - (1ª SÉRIE)' })
      .orWhere({description: 'ENSINO MÉDIO - (2ª SÉRIE)' })
      .orderBy('description', 'asc')
      .orderBy('name', 'asc')
      .fetch()
  }

  async store ({ request, response }) {
    
  }

  async show ({ params, request, response, view }) {
    return await Employee.find(params.id)
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = EmployeeController
