import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QrReader from 'react-qr-reader'
import NaloxoneForm from './NaloxoneForm'

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
          <div>
            <div><button>X</button></div>
            <QrReader
              delay={this.state.delay}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: '50%' }}
            />
            <button>Enter Serial #</button>
            <button onClick={this.handleSubmit}>Done</button>
            <p>{this.state.result}</p>
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
