/* globals I18n */
import React from 'react'
import 'bulma/css/bulma.css'
import { Button } from 'bloomer'

class ThankYouPage extends React.Component {
  render () {
    return (
      <div>
        <h1 className='greeting'>{I18n.t('thanks')}</h1>
        <div>
          <div><Button className='is-danger' onClick={this.props.setQr} >{I18n.t('scanner')}</Button></div>
          <div><Button className='is-danger' onClick={this.props.setManualInput} >{I18n.t('manual')}</Button></div>
        </div>
      </div>
    )
  }
}

export default ThankYouPage
