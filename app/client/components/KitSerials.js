import React from 'react'
// import {Button, Control, Label} from 'bloomer'
// import { Formik, Form, Field, ErrorMessage } from 'formik'

import NaloxoneForm from './NaloxoneForm'
import SerialForm from './SerialForm'
import Scanner from './Scanner'
// import QrReader from 'react-qr-reader'

class KitSerials extends React.Component {
  constructor () {
    super()
    this.state = {
      status: 'qr',
      results: [],
      scanning: true,
      inputtingSerials: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleScan = this.handleScan.bind(this)
    this.setManual = this.setManual.bind(this)
  }

  handleSubmit () {
    if (this.state.results.length === 0) {
    } else {
      this.setState(state => ({ scanning: !state.scanning }))
    }
  }

  handleScan (data) {
    let results = this.state.results
    if (data) {
      this.setState({
        results: results.concat(data)
      })
    }
  }

  setManual () {
    this.setState({
      status: 'manual'
    })
  }

  render () {
    let status = this.state.status
    if (status === 'qr') {
      return (
        <Scanner handleSubmit={this.handleSubmit} handleScan={this.handleScan} setManual={this.setManual} />
      )
    } else if (status === 'manual') {
      return (
        <SerialForm />
      )
    } else if (status === 'naloxoneForm') {
      return (
        <NaloxoneForm results={this.state.results} />
      )
    }
  }
}
export default KitSerials
