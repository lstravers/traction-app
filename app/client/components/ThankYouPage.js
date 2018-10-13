import React from 'react'
import 'bulma/css/bulma.css'
import { Button } from 'bloomer'

class ThankYouPage extends React.Component {
  render () {
    return (
      <div>
        <h1 className='greeting'> Thank you for your submission!</h1>
        <div>
          <p className='center-justify'>Please select an option below to continue.</p>
          <div><Button className='is-danger' onClick={this.props.setQr} >Scan QR Code</Button></div>
          <div><Button className='is-danger' onClick={this.props.setManualInput} >Input Kit Serial Codes</Button></div>
        </div>
      </div>
    )
  }
}

export default ThankYouPage
