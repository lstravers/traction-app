/* globals I18n */
import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarItem, NavbarBurger, NavbarStart, NavbarEnd, NavbarMenu, Button } from 'bloomer'
import 'bulma/css/bulma.css'

import TractionLogo from 'images/traction-logo.png'
import usFlag from 'images/united-states.png'
import spainFlag from 'images/spain.png'

class HeaderAdmin extends Component {
  constructor () {
    super()
    this.state = {
      isActive: false
    }
    this.isActiveTrue = this.isActiveTrue.bind(this)
    this.isActiveFalse = this.isActiveFalse.bind(this)
  }
  isActiveTrue () {
    this.setState({
      isActive: true
    })
  }

  isActiveFalse () {
    this.setState({
      isActive: false
    })
  }

  render () {
    let { isActive } = this.state
    if (!isActive) {
      return (
        <Navbar stlye={{margin: '0'}}>
          <NavbarBrand>
            <NavbarItem>
              <a onClick={() => (window.location.href = '/')}><img className='header-logo' src={TractionLogo} /></a>
            </NavbarItem>
            <NavbarBurger className='burger-inactive' isActive={false} onClick={this.isActiveTrue} />
          </NavbarBrand>
          <NavbarMenu isActive={false} onClick={this.onClickNav}>
            <NavbarStart>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/admin')}>Home</a>
              </NavbarItem>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/home')}>Nalaxone Distribution</a>
              </NavbarItem>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/reversals')}>Reversals Overview</a>
              </NavbarItem>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/inventories')}>Distributed Naloxone Kits</a>
              </NavbarItem>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/users')}>Volunteers</a>
              </NavbarItem>
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem>
                <img src={usFlag} style={{width: '1rem'}} class='flag flag-as' alt='flag' />
              </NavbarItem>
              <NavbarItem>
                <img src={spainFlag} style={{width: '1rem'}} class='flag flag-as' alt='flag' />
              </NavbarItem>
              <NavbarItem isHidden='touch'>
                <Button className='is-danger' onClick={() => (window.location.href = '/logout')}>Logout</Button>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      )
    } else if (isActive) {
      return (
        <Navbar >
          <NavbarBrand>
            <NavbarItem>
              <a onClick={() => (window.location.href = '/')}><img className='header-logo' src={TractionLogo} /></a>
            </NavbarItem>
            <NavbarBurger className='burger-active' isActive onClick={this.isActiveFalse} />
          </NavbarBrand>
          <NavbarMenu isActive onClick={this.handleClick}>
            <NavbarStart>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/admin')}>Home</a>
              </NavbarItem>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/home')}>Nalaxone Distribution</a>
              </NavbarItem>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/reversals')}>Reversals Overview</a>
              </NavbarItem>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/inventories')}>Distributed Naloxone Kits</a>
              </NavbarItem>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/users')}>Volunteers</a>
              </NavbarItem>
              <NavbarItem>
                <a className='header-link' onClick={() => (window.location.href = '/logout')}>Logout</a>
              </NavbarItem >
            </NavbarStart>
            <NavbarEnd>
              <NavbarItem isHidden='touch'>
                <Button className='is-danger' onClick={() => (window.location.href = '/logout')}>Logout</Button>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Navbar>
      )
    }
  }
}

export default HeaderAdmin
