import React, { Component } from 'react'
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
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render () {
    return (
      <div>
        {this.state.expanded ? (
          <div className='header'>
            <span>Harm Reduction Tracker</span>
            <span className='dropdown is-right is-hoverable'>
              <span className='dropdown-trigger'>
                <button className='button is-large' onClick={this.handleClick}>
                  <span className='icon is-large'>
                  &equiv;
                  </span>
                </button>
              </span>
              <span className='dropdown-menu' id='dropdown-menu' role='menu'>
                <span className='dropdown-content'>
                  <div>
                    <a href='/qrscanner' className='dropdown-item'>
                      Scan QR Code
                    </a>
                  </div>
                  <div>
                    <a href='/kitserials' className='dropdown-item'>
                     Input Kit Serial Number
                    </a>
                  </div>
                  <div>
                    <a href='/logout' className='dropdown-item'>
                      Logout
                    </a>
                  </div>
                </span>
              </span>
            </span>
          </div>
        )
          : (<div className='header'>
            <span>Harm Reduction Tracker</span>
            <span className='dropdown is-right'>
              <span className='dropdown-trigger is-hoverable'>
                <button className='button' onClick={this.handleClick}>
                  <span className='icon is-large'>
                  &equiv;
                  </span>
                </button>
              </span>
            </span>
          </div>)
        }
      </div>
    )
  }
}

export default Header
