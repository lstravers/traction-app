import React from 'react'
import 'bulma/css/bulma.css'
import { Title, Button } from 'bloomer'

class WelcomeView extends React.Component {
  render () {
    let {currentUser} = this.props
    return (
      <div>
        <Title> Welcome, {currentUser.first_name}!</Title>
        <p>Thank you for volunteering! Please select one of the options below to proceed. </p>
        <Button className='is-primary' onClick={() => window.location.href = '/kitserials'}>Scan QR Code</Button>
        <Button className='is-primary' onClick={this.props.setKitSerials}>Input Kit Serial Codes</Button>
      </div>
    )
  }
}

export default WelcomeView
