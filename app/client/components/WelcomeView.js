import React from 'react'
import 'bulma/css/bulma.css'
import { Title, Button } from 'bloomer'

class WelcomeView extends React.Component {
  render () {
    let { currentUser } = this.props
    return (
      <div className='container'>
        <h1 className='greeting'> Welcome, {currentUser.first_name}!</h1>
        <p>Thank you for volunteering! Please select one of the options below to proceed. </p>
        <Button className='is-danger button' onClick={() => window.location.href = '/kitserials'}>Scan QR Code</Button>
        <Button className='is-danger button' onClick={() => window.location.href = '/kitserials?status=manual'}>Input Kit Serial Codes</Button>
      </div>
    )
  }
}

export default WelcomeView
