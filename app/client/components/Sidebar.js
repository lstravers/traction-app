import React from 'react'

class Sidebar extends React.Component {
  constructor () {
    super()
    this.state = {
      toggle: false
    }
  }
  render () {
    return (
      <div className='user-info'>
        <p>Logged in as current user</p>
        <p><button>Logout</button></p>
      </div>
    )
  }
}

export default Sidebar
