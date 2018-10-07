import React from 'react'
import {Button} from 'bloomer'

class ThankYouPage extends React.Component {
  render () {
    return (
      <div className='thank-container'>
        <h1 className='thanks'> Thank you for your submission!</h1>
        <div>
          <p className='instructions'>Please select an option to continue</p>
          <div className='scan-button-container' ><button onClick={() => window.location.href='/qrscanner'} className='scan-button'>Scan QR Code</button></div>
          <div className='input-button-container'><button onClick={() => window.location.href='/kitserials'} className='input-button'>Input Kit Serial Codes</button></div>
        </div>
      </div>
    )
  }
}

export default ThankYouPage
