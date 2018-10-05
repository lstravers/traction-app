import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QrReader from 'react-qr-reader'

class Scanner extends Component {
  constructor (props) {
    super(props)
    this.state = {
      delay: 1000,
      results: []
    }
    this.handleScan = this.handleScan.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleScan (data) {
    let results = this.state.results
    if (data) {
      this.setState({
        results: results.concat(data)
      })

      // concat   and animation
      // if (data[idx] > 1) {
      //   this.setState({
      //     result: data,
  
      //   })
      // }
    }
  }

  handleError (err) {
    console.error(err)
  }

  componentDidUpdate () {
    // console.log(this.state.result)
  }

  handleSubmit () {
    const result = this.state.result
    // instead of set results- set state to not scanning and show form 
    // window.localStorage.setItem('Serial', result)
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
