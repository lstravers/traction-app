/* globals I18n */
import React from 'react'
import 'bulma/css/bulma.css'
import { Button } from 'bloomer'

class WelcomePage extends React.Component {
  render () {
    let { currentUser } = this.props
    return (
      <React.Fragment>
        <div className='container-content'>
          <h1 className='greeting'>{I18n.t('hello_user', {name: currentUser.first_name})}</h1>
          <p className='center-justify'>{I18n.t('intro')}</p>
          <Button className='is-danger' onClick={() => (window.location.href = '/kitserials')}>{I18n.t('scanner')}</Button>
          <Button className='is-danger' onClick={() => (window.location.href = '/kitserials?status=manual')}>{I18n.t('manual')}</Button>
        </div>
      </React.Fragment>
    )
  }
}

export default WelcomePage
