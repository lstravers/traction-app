import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QrReader from 'react-qr-reader'

class Scanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 1000,
      result: 'No result'
    }
    this.handleScan = this.handleScan.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleScan (data) {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError (err) {
    console.error(err)
  }

  componentDidUpdate () {
    // console.log(this.state.result)
  }

  handleSubmit (state) {
    // const result = this.state.result
    // window.localStorage.setItem('Serial', 'result')
    // console.log(this.state.result)
  }

  render () {
    return (
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '50%' }}
        />
        <a href='/home'><button onClick={this.handleSubmit}>Done</button></a>
        <p>{this.state.result}</p>
      </div>
    )
  }
}

Scanner.propTypes = {
  handleScan: PropTypes.func
}

export default Scanner
