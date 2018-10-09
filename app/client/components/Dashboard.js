import React from 'react'
import 'bulma/css/bulma.css'

import WelcomeView from './WelcomeView'
import Header from './Header'

class Dashboard extends React.Component {
  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({currentUser: user})
  }
  render () {
    const { currentUser } = this.props
    return (
      <div className='Dashboard'>
        {/* <Header /> */}
        <div className='main'>
          <WelcomeView currentUser={currentUser} />
        </div>
      </div>
    )
  }
}
export default Dashboard
