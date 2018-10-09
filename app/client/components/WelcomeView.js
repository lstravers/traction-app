import React from 'react'
import 'bulma/css/bulma.css'
import { Title, Button } from 'bloomer'
import KitSerials from './KitSerials'

class WelcomeView extends React.Component {
  render () {
    let { currentUser, setManualInput } = this.props
    return (
      <div>
        {/* <Title> Welcome, {currentUser.first_name}!</Title> */}
        <p>Thank you for volunteering! Please select one of the options below to proceed. </p>
        <Button className='is-primary' onClick={() => window.location.href = '/kitserials'}>Scan QR Code</Button>
        <Button className='is-primary' onClick={() => window.location.href = '/kitserials?status=manual'}>Input Kit Serial Codes</Button>
      </div>
    )
  }
}

export default WelcomeView
