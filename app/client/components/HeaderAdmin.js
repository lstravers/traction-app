import React, { Component } from 'react'
import { Title } from 'bloomer'
import 'bulma/css/bulma.css'

import TractionLogo from 'images/traction-logo.svg'

class HeaderAdmin extends Component {
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
              <a onClick={() => window.location.href = '/'}><img src={TractionLogo} /></a>              <a role='button' className='navbar-burger burger is-active is-large' aria-label='menu is-active' aria-expanded='false' onClick={this.handleClick}>
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </a>
            </div>
            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-start'>
                <a className='navbar-item' onClick={() => window.location.href = '/admin'}>
    <i class="fas fa-home"></i> | Home
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/home'}>
    <i class="fas fa-hands-helping"></i> | Naloxone Distribution                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/reversals'}>
    <i class="fas fa-heartbeat"></i> | Total Reversals
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/inventories'}>
    <i class="fas fa-medkit"></i> | Inventory
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-end'>
                <a className='navbar-item' onClick={() => window.location.href = '/users'}>
    <i class="fas fa-user"></i> | Volunteers
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-end'>
                <a className='navbar-item' onClick={() => window.location.href = '/logout'}>
    <i class="fas fa-sign-out-alt"></i> | Logout
                </a>
              </div>
            </div>
          </nav>
        )
          : (<nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
              <a onClick={() => window.location.href = '/'}><img src={TractionLogo} /></a>              <a role='button' className='navbar-burger burger is-large' aria-label='menu' aria-expanded='false' data-target='navbar-main' onClick={this.handleClick}>
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

export default HeaderAdmin
