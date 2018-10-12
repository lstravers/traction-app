import React from 'react'
import 'bulma/css/bulma.css'
import { Button } from 'bloomer'

class ThankYouPage extends React.Component {
  render () {
    return (
      <div>
        <div className='thank-container'>
          <h1 className='thanks'> Thank you for your submission!</h1>
          <div>
            <p className='instructions'>Please select an option below to continue.</p>
            <div><Button className='is-danger' onClick={this.props.setQr} className='scan-button'>Scan QR Code</Button></div>
            <div><Button className='is-danger' onClick={this.props.setManualInput} className='input-button'>Input Kit Serial Codes</Button></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ThankYouPage
