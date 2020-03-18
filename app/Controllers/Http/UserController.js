'use strict'

const User = use('App/Models/User')
const Profile = use('App/Models/Profile')
const Hash = use('Hash')
class UserController {

  async index ({ request, response, view }) {
    
    return await  User.query()
      .orderBy('name', 'asc')
      .fetch()
  }

  async store ({ request, response }) {
    const data = request.only(['email', 'password', 'name', 'profile_name'])

    const profile = await Profile.findBy({name:data.profile_name})
    if(!profile){
      return { message:'Perfil não cadastrado '}
    }

    const user = await User.findBy('email', data.email)
    if(user){
      return {message:'Email já cadastrado'}
    }

    return await User.create({...data, profile_name:profile.name})
  }

  async show ({ params, request, response, view }) {
        
    return await User.find(params.id)

  }


  async update ({ params, request, response }) {
    const {id} = params
    const data = request.only(['email', 'name', 'profile_name'])
    
    const profile = await Profile.findBy({name:data.profile_name})
    if(!profile){
      return {message:'Perfil não cadastrado'}
    }

    const {password} = request.only(['password'])
    if(password){
      data.password = await Hash.make(password)
    }

    await User.query()
        .where('id', id )
        .update({...data, profile_name:profile.name})

    return await User.find(id)
  
  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = UserController
