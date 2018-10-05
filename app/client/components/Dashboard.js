import React from 'react'
import 'bulma/css/bulma.css'

import WelcomeView from './WelcomeView'
// import Header from './Header'

class Dashboard extends React.Component {
  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({currentUser: user})
  }
  onLogout () {
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('token')
    this.setState({currentUser: false})
  }
  render () {
    const { currentUser } = this.props
    if (currentUser) {
      return (
        <div className='Dashboard'>
          {/* <Header onLogout={this.onLogout} /> */}
          <div className='main'>
            <WelcomeView currentUser={currentUser} />
          </div>
        </div>
      )
    } else {
      return (
        // return to rails login view
        <div>
          <p>Login</p>
        </div>
      )
    }
  }
}
export default Dashboard
