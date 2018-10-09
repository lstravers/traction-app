import React from 'react'
import 'bulma/css/bulma.css'

import WelcomeView from './WelcomeView'
import Header from './Header'
import KitSerials from './KitSerials'

class Dashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      status: 'welcome'
    }
    this.setKitSerials = this.setKitSerials.bind(this)
  }

  setKitSerials () {
    this.setState({
      status: 'kitSerials'
    })
  }
  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({currentUser: user})
  }
  render () {
    const { currentUser } = this.props
    const { status } = this.state
    if (status === 'welcome') {
      return (
        <div className='Dashboard'>
          <Header />
          <div className='main'>
            <WelcomeView currentUser={currentUser} setManualInput={this.setManualInput} setKitSerials={this.setKitSerials} />
          </div>
        </div>
      )
    } else if (status === 'kitSerials') {
      return (
        <KitSerials />
      )
    }
  }
}
export default Dashboard
