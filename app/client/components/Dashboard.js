import React from 'react'
import 'bulma/css/bulma.css'
import { Button, Title } from 'bloomer'

class Dashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
  }
  render () {
    return (

      <div className='Dashboard'>
        <div className='main'>
          <Title> Welcome!</Title>
          <p>Third fridays seventy alt-country jazz food truck rigsbee cupcakes sustainable world beer festival train, the state of things duke chapel partner carpe durham eagles liberty food truck. Parrish street duke park durham divas southpoint basketball, duke carpe durham science and math, 70 ninth street dur'm.</p>
          <Button className='is-primary'>Scan QR Code</Button>
          <p>OR</p>
          <Button className='is-primary'>Input Kit Serial Codes</Button>
        </div>
      </div>
    )
  }
}
export default Dashboard
