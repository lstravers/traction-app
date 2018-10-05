import React from 'react'
import 'bulma/css/bulma.css'

import WelcomeView from './WelcomeView'

class Dashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.state.currentUser = [ username, token ]
    }
  }
  setCurrentUser (user) {
    window.localStorage.setItem('username', user.usernamer)
    window.localStorage.setItem('token', user.token)
  }
  render () {
    const { currentUser } = this.state
    return (
      <div className='Dashboard'>
        <div className='main'>
          <WelcomeView currentUser={currentUser} />
        </div>
      </div>
    )
  }
}
export default Dashboard
