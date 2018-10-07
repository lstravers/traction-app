import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QrReader from 'react-qr-reader'
import NaloxoneForm from './NaloxoneForm'
import request from 'superagent/superagent.js'

class Scanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 1000,
      results: [],
      scanning: true,
      value: ''
      // reversal: false
    }
    this.handleScan = this.handleScan.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleScan (data) {
    let results = this.state.results
    if (data) {
      this.setState({
        results: results.concat(data)
      })
    }
  }

  handleError (err) {
    console.error(err)
  }

  handleChange (event) {
    console.log(event.target.value, 'event.target.value')
    this.setState({ value: event.target.value })
    
  }

  handleSubmit () {
    if (this.state.results.length === 0) {
    } else {
      this.setState(state => ({ scanning: !state.scanning }))
    }
  }

  render () {
    return (
      <div>
        {this.state.scanning ? (
          <div className='scan-container'>
            <div className='exit-button-div'><button className='exit-button'>X</button></div>
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '50%' }}
            />
            <div className='serial-button-div'><button className='serial-button'>Enter Serial #</button></div>
            <div className='done-button-div'><button className='done-button' onClick={this.handleSubmit}>Done</button></div>
          </div>)
          : (
            <NaloxoneForm results={this.state.results} handleChange={this.handleChange} />
          )
        }
      </div>)
  }
}

Scanner.propTypes = {
  handleScan: PropTypes.func
}

export default Scanner
