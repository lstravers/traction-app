/* globals I18n */
import React from 'react'
import {Button} from 'bloomer'

class ThankYouPage extends React.Component {
  render () {
    return (
      <div>
        <div className='thank-container'>
          <h1 className='thanks'>{I18n.t('thanks')}</h1>
          <div>
            <p className='instructions'>{I18n.t('select')}</p>
            <div><Button className='is-danger' onClick={this.props.setQr} className='scan-button'>{I18n.t('scanner')}</Button></div>
            <div><Button className='is-danger' onClick={this.props.setManualInput} className='input-button'>{I18n.t('manual')}</Button></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ThankYouPage
