import React from 'react'
import {Button} from 'bloomer'

class ThankYouPage extends React.Component {
  render () {
    return (
      <div>
        <h1> Thank you for your submission!</h1>
        <div>
          <p>Please select onf of the options to continue</p>
          <div><Button onClick={() => window.location.href='/qrscanner'} className='is-primary'>Scan QR Code</Button></div>
          <div><Button onClick={() => window.location.href='/kitserials'}className='is-primary'>Input Kit Serial Codes</Button></div>
        </div>
      </div>
    )
  }
}

export default ThankYouPage
