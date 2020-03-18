'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.post('/login', 'AuthController.login')

Route.group(() => {
  Route.resource('/users', 'UserController').apiOnly()
  Route.resource('/profiles', 'ProfileController').apiOnly()
  //Route.resource('/employees', 'EmployeeController').apiOnly()
  Route.resource('/reasons', 'ReasonController').apiOnly()
  Route.resource('/services', 'ServiceController').apiOnly()

  Route.get('/employees', 'EmployeeController.index')
  Route.get('/employees/:rc', 'EmployeeController.show')
  
}).middleware('auth')
