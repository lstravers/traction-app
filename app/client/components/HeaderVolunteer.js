import React, { Component } from 'react'
// import { Title } from 'bloomer'
import 'bulma/css/bulma.css'

import TractionLogo from 'images/traction-logo.svg'

class HeaderVolunteer extends Component {
  constructor () {
    super()
    this.state = {
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(state => ({ expanded: !this.state.expanded }))
  }

  render () {
    return (
      <div>
        {this.state.expanded ? (
          <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
              <a onClick={() => window.location.href = '/'}><img className='header-logo' src={TractionLogo} /></a>
              <a role='button' className='navbar-burger burger is-active is-large' aria-label='menu is-active' aria-expanded='false' onClick={this.handleClick}>
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </a>
            </div>
            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-start'>
                <a className='navbar-item' onClick={() => window.location.href = '/home'}>
                  <i class='fas fa-home' /> | Home
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/kitserials'}>
                  <i class='fas fa-qrcode' /> | Scan QR Code
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/kitserials?status=manual'}>
                  <i class='fas fa-medkit' /> | Input Kit Serial Codes
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-end'>
                <a className='navbar-item' onClick={() => window.location.href = '/logout'}>
                  <i class='fas fa-sign-out-alt' /> | Logout
                </a>
              </div>
            </div>
          </nav>
        )
          : (<nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
              <a onClick={() => window.location.href = '/home'}><img className='header-logo'src={TractionLogo} /></a>
              <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbar-main' onClick={this.handleClick}>
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </a>
            </div>
          </nav>
          )}
      </div>
    )
  }
}

export default HeaderVolunteer
