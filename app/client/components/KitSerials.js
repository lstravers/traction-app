/* globals I18n */
import React from 'react'
import NaloxoneForm from './NaloxoneForm'
import SerialForm from './SerialForm'
import Scanner from './Scanner'
import ThankYouPage from './ThankYouPage'
import Card from './Card'
import ScannerCard from './ScannerCard'

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
    this.resetForm = this.resetForm.bind(this)
  }

  resultsConcat (value, i) {
    this.setState({
      results: this.state.results.concat(value)
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

  resetForm () {
    this.setState({
      results: []
    })
  }

  render () {
    let status = this.state.status
    if (status === 'qr') {
      return (
        <div className='scanner-container'>
          <ScannerCard><Scanner setManualInput={this.setManualInput} resultsConcat={this.resultsConcat} setForm={this.setForm} results={this.state.results} /></ScannerCard>
        </div>
      )
    } else if (status === 'manual') {
      return (
        <div className='manual-input-container'>
          <Card><SerialForm setForm={this.setForm} resultsConcat={this.resultsConcat} results={this.state.results} setQr={this.setQr} /></Card>
        </div>
      )
    } else if (status === 'naloxoneForm') {
      return (
        <div>
          <Card><NaloxoneForm results={this.state.results} resetForm={this.resetForm} setThankYou={this.setThankYou} /></Card>
        </div>
      )
    } else if (status === 'thankYou') {
      return (
        <div className='confirmation-container'>
          <Card><ThankYouPage setManualInput={this.setManualInput} setForm={this.setForm} setQr={this.setQr} /></Card>
        </div>
      )
    }
  }
}
export default KitSerials
