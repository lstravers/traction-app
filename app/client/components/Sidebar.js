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
        <div className='field'>
          <input id='switchExample' type='checkbox' name='switchExample' class='switch' checked='checked' />
          <label for='switchExample'>Switch example</label>
        </div>
      </div>
    )
  }
}
export default Sidebar
