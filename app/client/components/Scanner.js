import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QrReader from 'react-qr-reader'
// import NaloxoneForm from './NaloxoneForm'

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
  }

  handleScan (data) {
    if (data) {
      this.state.results.concat(data)
    }
    // if (data) {
    //   setTimeout(() => {
    //     this.setState({
    //       flash: true
    //     })
    //   }, 1000)
    // }
  }

  handleError (err) {
    console.error(err)
  }

  handleSubmit () {
    if (this.props.results.length !== 0) {
      this.props.setForm()
    }
  }

  render () {
    let { flash } = this.state
    const flashClass = flash ? `flash` : ''
    return (
      <div className='scan-container'>
        <div className='exit-button-div'><button className='exit-button' onClick={() => window.location.href = '/home'}>X</button></div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
          className={`${flashClass}`}
        />
        <div className='serial-button-div'><button className='serial-button' onClick={this.props.setManualInput}>Enter Serial #</button></div>
        <div className='done-button-div'><button className='done-button' onClick={this.handleSubmit}>Done</button></div>
      </div>)
  }
}

Scanner.propTypes = {
  handleScan: PropTypes.func
}

export default Scanner
