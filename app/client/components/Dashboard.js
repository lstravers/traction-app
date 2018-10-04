import React from 'react'
import 'bulma/css/bulma.css'

class Dashboard extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
    this.setCurrentUser = this.setCurrentUser.bind.bind(this)
    this.onLogout = this.onLogout.bind(this)

    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.state.currentUser = { username, token }
    }
  }
  setCurrentUser (user) {
    window.localStorage.setItem('username', user.username)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user })
  }
  onLogout () {
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('token')
    this.setState({ currentUser: false })
  }
  render () {
    const { currentUser } = this.state
    return (
      <div className='Dashboard' />
    )
  }
}
export default Dashboard
