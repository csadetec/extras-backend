'use strict'
const Profile = use('App/Models/Profile')
const User = use('App/Models/User')

class ProfileController {

  async index ({ request, response, view }) {

    return await Profile.query()
      .orderBy('name', 'asc')
      .fetch()
  }


  async store ({ request, response }) {
    const data = request.only(['name'])

    const  profile = await Profile.findBy({name:data.name})

    if(profile){
      return {message: `${profile.name} já foi cadastrado`}
    }

    return  await Profile.create(data)

    //return profile
  }


  async show ({ params }) {
    const {id} = params
    
    return await Profile.find(id)

  }

  async update ({ params, request, response }) {
    const {id} = params
    const data = request.only(['name'])

    await Profile.query()
      .where('id', id)
      .update(data)
    
    await User.query()
      .where('profile_id', id)
      .update({profile_name: data.name })

    return await Profile.find(id)

  }


  async destroy ({ params, request, response }) {
  }
}

module.exports = ProfileController
