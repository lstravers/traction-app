import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QrReader from 'react-qr-reader'
import { Button } from 'bloomer'

class Scanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 1000,
      results: [],
      scanning: true,
      flash: false
    }
    this.handleScan = this.handleScan.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.escapePatch = this.escapePatch.bind(this)
  }

  handleScan (data) {
    if (data) {
      this.props.resultsConcat(data)
    }
    if (data) {
      this.setState({
        flash: true
      })
      setTimeout(() => {
        this.setState({
          flash: false
        })
      }, 1000)
    }
  }

  handleError (err) {
    console.error(err)
  }

  handleSubmit () {
    if (this.props.results.length !== 0) {
      this.props.setForm()
    }
  }

  escapePatch () {
    window.location.href = '/home'
  }

  render () {
    let { flash } = this.state
    const flashClass = flash ? `flash` : ''
    return (
      <React.Fragment>
        <div className='delete-button-container'><a onClick={this.escapePatch} ><i className='fas fa-times-circle has-text-danger' /></a></div>
        <div className={`${flashClass}`}>
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <Button className='button is-danger' onClick={this.props.setManualInput}>Input Kit Serial Codes</Button>
        </div>
        <div>
          <Button className='button is-danger' onClick={this.handleSubmit}>Done</Button>
        </div>
      </React.Fragment>)
  }
}

Scanner.propTypes = {
  handleScan: PropTypes.func
}

export default Scanner
