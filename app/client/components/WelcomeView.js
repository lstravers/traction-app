import React from 'react'
import 'bulma/css/bulma.css'
// import { Title, Button } from 'bloomer'

class WelcomeView extends React.Component {
  render () {
    let {currentUser} = this.props
    return (
      <div>
        <Title> Welcome, {currentUser.first_name}!</Title>
        <p>Third fridays seventy alt-country jazz food truck rigsbee cupcakes sustainable world beer festival train, the state of things duke chapel partner carpe durham eagles liberty food truck. Parrish street duke park durham divas southpoint basketball, duke carpe durham science and math, 70 ninth street dur'm.</p>
        <Button className='is-primary'>Scan QR Code</Button>
        <p>Or</p>
        <Button className='is-primary'>Input Kit Serial Codes</Button>
      </div>
    )
  }
}

export default WelcomeView
