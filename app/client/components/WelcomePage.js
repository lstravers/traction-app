import React from 'react'
import 'bulma/css/bulma.css'
import { Button } from 'bloomer'

class WelcomePage extends React.Component {
  render () {
    let { currentUser } = this.props
    return (
      <div className='container'>
        <div className='container-content'>
          <h1 className='greeting'> Hello, {currentUser.first_name}.</h1>
          <p>Thank for supporting your community! Please either scan a QR code or manually input a serial number that can be found on each Naloxone kit by select one of the options below. Once you have scanned a QR code or you have input a serial number, you will be prompted to fill out a client form. Please complete the form to the best of your knowledge before submitting and distributing a Naloxone kit to the client.</p>
          <Button className='is-danger' onClick={() => window.location.href = '/kitserials'}>Scan QR Code</Button>
          <Button className='is-danger' onClick={() => window.location.href = '/kitserials?status=manual'}>Input Kit Serial Number</Button>
        </div>
      </div>
    )
  }
}

export default WelcomePage
