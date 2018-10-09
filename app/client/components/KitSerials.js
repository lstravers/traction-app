import React from 'react'

import NaloxoneForm from './NaloxoneForm'
import SerialForm from './SerialForm'
import Scanner from './Scanner'

class KitSerials extends React.Component {
  constructor () {
    super()
    this.state = {
      status: 'qr',
      results: [],
      scanning: true,
      inputtingSerials: false
    }
    this.setManualInput = this.setManualInput.bind(this)
    this.setForm = this.setForm.bind(this)
    this.resultsConcat = this.resultsConcat.bind(this)
  }

  resultsConcat (values) {
    this.setState({
      results: this.state.results.concat(values)
    })
  }

  setManualInput () {
    this.setState({
      status: 'manual'
    })
  }

  setForm () {
    this.setState({
      status: 'naloxoneForm'
    })
  }

  render () {
    let status = this.state.status
    if (status === 'qr') {
      return (
        <Scanner setManualInput={this.setManualInput} resultsConcat={this.resultsConcat} setForm={this.setForm} results={this.state.results} />
      )
    } else if (status === 'manual') {
      return (
        <SerialForm setForm={this.setForm} resultsConcat={this.resultsConcat} results={this.state.results} />
      )
    } else if (status === 'naloxoneForm') {
      return (
        <NaloxoneForm results={this.state.results} />
      )
    }
  }
}
export default KitSerials
