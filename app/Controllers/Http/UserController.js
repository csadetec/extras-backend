'use strict'

const User = use('App/Models/User')

class UserController {

  async index ({ request, response, view }) {
    const users = User.all()

    return users
  }

  async store ({ request, response }) {
    const data = request.only(['email', 'password', 'name', 'profile_id'])
    
    const email = await User.findBy('email', data.email)
    if(email){
      return ({'message':'Email já cadastrado'})
    }

    const user = User.create(data)
    return user
  }

  async show ({ params, request, response, view }) {
  }


  async update ({ params, request, response }) {
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
