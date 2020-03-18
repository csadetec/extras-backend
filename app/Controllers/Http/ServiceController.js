'use strict'
const Service = use('App/Models/Service')
const Reason = use('App/Models/Reason')

class ServiceController {

  async index ({ request, response, view }) {
    
    return await Service.query()
      .orderBy('date', 'asc')
      .with('user')
      .fetch()
  }

  async store ({ request, response, auth }) {
    const data = request.only(['date', 'start', 'end', 'confirm', 'reason_name'])
    const {employees} = request.only(['employees'])

    return employees

    const reason = await Reason.findBy({name:data.reason_name})
    if(!reason){
      return {message:'Natureza do Serviço não cadastrado!'}
    }
    
    return await Service.create({...data, user_id:auth.user.id})

  }


  async show ({ params, request, response, view }) {

    const {id} = params
    const service =  await Service.find(params.id)
    service.user = await service.user().fetch()

    return service

  }


  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
    const {id} = params
    const service = await Service.find(id)
    if(!service){
      return {message:'Serviço não Cadastrado'}
    }

    return await service.delete()
  }
}

module.exports = ServiceController
