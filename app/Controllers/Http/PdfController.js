'use strict'
const ServiceEmployee =  use('App/Models/ServiceEmployee')
const Helpers = use('Helpers')

class PdfController {

  async create({ request, response, view }) {
    const {start, end} = request.only(['start, end'])
    const pdf = require('html-pdf')
    //const {formatDate} = require('../../../utils/helpers')
    const fs = require('fs')
    let reports = await ServiceEmployee.query()
      .select(['employee_id', 'service_id', 'reason_name', 'start', 'end', 'date', 'qtd_hours'])
      .with('employee')
      .leftJoin('employees', 'services_employees.employee_id', 'employees.id')
      .whereBetween('date', [`${start}`, `${end}`])
      .orderBy('employees.name', 'asc')
      .fetch()

    reports = reports.toJSON()
    for (let r in reports) {
      if(reports[r].date){
        let date = reports[r].date.split('-')
        let day = date[2]
        let month = date[1]
        reports[r].date = `${day}/${month}`
      }else{
        reports[r].date  = 'INDEFINIDO'

      }
    }

    //return reports
    const html = view.render('pdf', { reports })
    
    //pdf.create(html, {  }).toFile(Helpers.tmpPath('download/document.pdf'), (err) => {
      pdf.create(html, {  }).toFile('download/document.pdf', (err) => {
      
      if (err) {
        return response.send(Promise.reject())
      }
      return response.send(Promise.resolve())
    })
    //return {msg:'teste'}*/
  }

  async get({request, response}){
    return response.attachment(
      ('download/document.pdf')
    )
    /*
    return response.download(
      Helpers.tmpPath('download/test.pdf')
    )
    /**/
  }


}

module.exports = PdfController
