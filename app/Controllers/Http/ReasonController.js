'use strict'

const Reason = use('App/Models/Reason')

class ReasonController {

  async index ({ request, response, view }) {

    return await Reason.query()
      .orderBy('name', 'asc')
      .fetch()


  }

  async store ({ request, response }) {
    const data = request.only(['name'])

    const reason = await Reason.findBy({name:data.name})
    if(reason){
      return {message:`${reason.name} já foi cadastrado`}
    }

    return await Reason.create(data)

  }

  async show ({ params, request, response, view }) {
    
    return await Reason.find(params.id)

  }

  async update ({ params, request, response }) {
    
    const {id} = params
    const data = request.only(['name'])

    await Reason.query()
      .where({id})
      .update(data)

    return await Reason.find(id)

  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = ReasonController
