'use strict'
const Service = use('App/Models/Service')
const Reason = use('App/Models/Reason')
const ServiceEmployee = use('App/Models/ServiceEmployee')
const ServiceEmployeeController = use('/ServiceEmployeeController')
const sc = new ServiceEmployeeController()

class ServiceController {

  async index ({ request, response, view }) {
    
    return await Service.query()
      .orderBy('date', 'asc')
      .with('user')
      .with('employees')
      .fetch()
  }

  async store ({ request, response, auth }) {
    const data = request.only(['date', 'start', 'end', 'confirm', 'reason_name', 'obs'])
    const {employees} = request.only(['employees'])    
    const reason = await Reason.findBy({name:data.reason_name})
    if(!reason){
      return {message:'Natureza do Serviço não cadastrado!'}
    }

    let service = await Service.create({...data, user_id:auth.user.id})

    const find = await sc.store(auth.user.id, service.id, data.date, employees)
    if(find){
      service = await Service.find(service.id)
      await service.delete()
      return {find, status:401}
    }
    service.employees = await service.employees().fetch()
    return service
  }


  async show ({ params, request, response, view }) {

    const {id} = params
    const service = await Service.find(id)
    service.user = await service.user().fetch()
    service.employees = await service.employees().fetch()
    
    return service
  }

  async update ({ params, request, response, auth }) {
    const data = request.only(['date', 'start', 'end', 'confirm', 'reason_name', 'obs'])
    const {id} = params
    const {employees} = request.only(['employees'])

    const find =  await sc.store(auth.user.id, id, data.date, employees)
   
    if(find){
      return {status:401, find}
      //return find
    }
    await Service.query()
      .where({id})
      .update(data)

    const service = await Service.find(id)
    service.user = await service.user().fetch()
    service.employees = await service.employees().fetch()
    
    return service
  }

  async destroy ({ params, request, response }) {
    const {id} = params
    
    const service =  await Service.find(id)
    await ServiceEmployee.query().where({service_id:id}).delete()
    await service.delete()
  }
}

module.exports = ServiceController
