'use strict'

const Reason = use('App/Models/Reason')

class ReasonController {

  async index ({ request, response, view }) {

    return await Reason.query()
      .orderBy('name', 'asc')
      .fetch()


  }

  async store ({ request, response }) {
  }

  /**
   * Display a single reason.
   * GET reasons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing reason.
   * GET reasons/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update reason details.
   * PUT or PATCH reasons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a reason with id.
   * DELETE reasons/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ReasonController
