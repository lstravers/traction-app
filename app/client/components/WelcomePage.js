import React from 'react'
import 'bulma/css/bulma.css'
import { Button } from 'bloomer'

class WelcomePage extends React.Component {
  render () {
    let { currentUser } = this.props
    return (
      <React.Fragment>
        <div className='container-content'>
          <h1 className='greeting'> Hello, {currentUser.first_name}.</h1>
          <p className='center-justify'>Thank you for supporting our community! Please select an option below to scan a QR code or input a serial number and complete the corresponding form to the best of your knowledge before distributing a Naloxone kit.</p>
          <Button className='is-danger' onClick={() => (window.location.href = '/kitserials')}>Scan QR Code</Button>
          <Button className='is-danger' onClick={() => (window.location.href = '/kitserials?status=manual')}>Input Kit Serial Number</Button>
        </div>
      </React.Fragment>
    )
  }
}

export default WelcomePage
