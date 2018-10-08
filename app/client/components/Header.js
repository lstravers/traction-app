import React, { Component } from 'react'
import { Title, Button } from 'bloomer'
import 'bulma/css/bulma.css'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      expanded: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('hey')
    this.setState(state => ({ expanded: !this.state.expanded }))
  }

  render () {
    return (
      <div>
        {this.state.expanded ? (
          <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
              <Title isSize={3} onClick={() => window.location.href = '/'}>Harm Reduction Tracker</Title>
              <a role='button' className='navbar-burger burger is-active' aria-label='menu is-active' aria-expanded='false' onClick={this.handleClick}>
                <span aria-hidden='true' />
                <span aria-hidden='true' />
                <span aria-hidden='true' />
              </a>
            </div>
            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-start'>
                <a className='navbar-item' href='#'>
    Home
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' href='#'>
    Scan QR Code
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div>
                <a className='navbar-item' href='#'>
    Input Kit Serial Codes
                </a>
              </div>
            </div>

            <div id='navbar-main' className='navbar-menu is-active'>
              <div className='navbar-end'>
                <a className='navbar-item'>
    Logout
                </a>
              </div>
            </div>
          </nav>
        )
          : (<nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
              <Title isSize={3} onClick={() => window.location.href = '/'}>Harm Reduction Tracker</Title>
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

export default Header
