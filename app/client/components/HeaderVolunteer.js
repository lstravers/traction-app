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
                  <i className='fas fa-home' /> | {I18n.t('home')}
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/kitserials'}>
                  <i className='fas fa-qrcode' /> | {I18n.t('scanner')}
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' onClick={() => window.location.href = '/kitserials?status=manual'}>
                  <i className='fas fa-medkit' /> | {I18n.t('manual')}
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-end'>
                <a className='navbar-item' onClick={() => window.location.href = '/logout'}>
                  <i className='fas fa-sign-out-alt' /> | {I18n.t('logout')}
                </a>
              </div>
            </div>
          </nav>
        )
          : (<nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
              <a onClick={() => window.location.href = '/home'}><img className='header-logo'src={TractionLogo} /></a>
              <div className='navbar-burger burger is-danger' aria-label='menu' aria-expanded='false' data-target='navbar-main' onClick={this.handleClick}>
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </div>
            </div>
          </nav>
          )}
      </div>
    )
  }
}

export default HeaderVolunteer
