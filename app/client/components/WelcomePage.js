import React from 'react'
import 'bulma/css/bulma.css'
import { Button } from 'bloomer'

class WelcomePage extends React.Component {
  render () {
    let { currentUser } = this.props
    return (
      <div className='container'>
        <div className='container-content'>
          <h1 className='greeting'> Hello, {currentUser.first_name}!</h1>
          <p>Thank you for volunteering! Please select one of the options below to proceed. </p>
          <Button className='is-danger' onClick={() => window.location.href = '/kitserials'}>Scan QR Code</Button>
          <Button className='is-danger' onClick={() => window.location.href = '/kitserials?status=manual'}>Input Kit Serial Codes</Button>
        </div>
      </div>
    )
  }
}

export default WelcomePage
