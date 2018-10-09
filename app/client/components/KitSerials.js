import React from 'react'

import NaloxoneForm from './NaloxoneForm'
import SerialForm from './SerialForm'
import Scanner from './Scanner'
import Header from './Header'

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
    this.setQr = this.setQr.bind(this)
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

  setQr () {
    this.setState({
      status: 'qr'
    })
  }

  render () {
    let status = this.state.status
    if (status === 'qr') {
      return (
        <div>
          <Header setManualInput={this.setManualInput} setForm={this.setForm} setQr={this.setQr} />
          <Scanner setManualInput={this.setManualInput} resultsConcat={this.resultsConcat} setForm={this.setForm} results={this.state.results} />
        </div>
      )
    } else if (status === 'manual') {
      return (
        <div>
          <Header setManualInput={this.setManualInput} setForm={this.setForm} setQr={this.setQr} />
          <SerialForm setForm={this.setForm} resultsConcat={this.resultsConcat} results={this.state.results} />
        </div>
      )
    } else if (status === 'naloxoneForm') {
      return (
        <div>
          <Header setManualInput={this.setManualInput} setForm={this.setForm} setQr={this.setQr} />
          <NaloxoneForm results={this.state.results} />
        </div>
      )
    }
  }
}
export default KitSerials
