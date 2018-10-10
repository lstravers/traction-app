import React from 'react'

import NaloxoneForm from './NaloxoneForm'
import SerialForm from './SerialForm'
import Scanner from './Scanner'
import Header from './Header'
import ThankYouPage from './ThankYouPage'

class KitSerials extends React.Component {
  constructor (props) {
    super()
    this.state = {
      status: props.initialStatus || 'qr',
      results: [],
      scanning: true,
      inputtingSerials: false
    }
    this.setManualInput = this.setManualInput.bind(this)
    this.setForm = this.setForm.bind(this)
    this.setQr = this.setQr.bind(this)
    this.resultsConcat = this.resultsConcat.bind(this)
    this.setThankYou = this.setThankYou.bind(this)
  }

  // updateResults () {

  // }

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

  setThankYou () {
    this.setState({
      status: 'thankYou'
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
          <SerialForm setForm={this.setForm} resultsConcat={this.resultsConcat} results={this.state.results} setQr={this.setQr} />
        </div>
      )
    } else if (status === 'naloxoneForm') {
      return (
        <div>
          <Header setManualInput={this.setManualInput} setForm={this.setForm} setQr={this.setQr} />
          <NaloxoneForm results={this.state.results} setThankYou={this.setThankYou} />
        </div>
      )
    } else if (status === 'thankYou') {
      return (
        <div>
          <Header setManualInput={this.setManualInput} setForm={this.setForm} setQr={this.setQr} />
          <ThankYouPage setManualInput={this.setManualInput} setForm={this.setForm} setQr={this.setQr} />
        </div>
      )
    }
  }
}
export default KitSerials
