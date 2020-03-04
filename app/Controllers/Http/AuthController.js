'use strict'

const User = use('App/Models/User')

class AuthController {
  async login({ request, auth }){
    const {email, password} = request.all()

    const token = await auth.attempt(email, password)

    token.user = await User.findBy('email', email)

    return token
      
  }


}

module.exports = AuthController
