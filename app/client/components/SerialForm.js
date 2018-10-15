/* globals I18n */
import React from 'react'
import {Button, Control, Label} from 'bloomer'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'

class SerialForm extends React.Component {
  constructor () {
    super()
    this.state = {
      inputtingSerials: true,
      serialNumbers: []
    }
  }

  render () {
    return (
      <div>
        <Formik
          initialValues={{ serialNumbers: [''] }}
          validate={values => {
            let errors = {}
            errors.serialNumbers = []
            for (let i = 0; i < values.serialNumbers.length; i++) {
              errors.serialNumbers[i] = values.serialNumbers[i] ? null : 'Required'
            }
            if (errors.serialNumbers.every(err => err === null)) {
              delete errors['serialNumbers']
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
            this.props.resultsConcat(values.serialNumbers)
            this.props.setForm()
          }}
        >
          {({ values, isSubmitting }) => (
            <div>
              <Form>
                <FieldArray name='serialNumbers' render={arrayHelpers => (
                  <React.Fragment>
                    {values.serialNumbers.map((el, i) => (
                      <Control className='input-field' key={i}>
                        <Label className='label' htmlFor={`serialNumbers[${i}]`}>{I18n.t('enter_serial')}
                        </Label>
                        <Field className='input serial-input' type='text' name={`serialNumbers[${i}]`} />
                        <a onClick={() => arrayHelpers.remove([i])}><i className='fas fa-times-circle has-text-danger input-delete' /></a>
                        <ErrorMessage className='has-text-danger' name={`serialNumbers[${i}]`} component='div' />
                      </Control>
                    ))}
                    <Button className='button is-primary' type='submit' disabled={isSubmitting}>{I18n.t('submit')}</Button>
                    <Button className='button is-danger sub-button' type='button' onClick={() => arrayHelpers.push('')}>{I18n.t('add')}</Button>
                  </React.Fragment>
                )} />
              </Form>
              <div>
                <Button className='button is-danger sub-button' type='button' onClick={this.props.setQr}>{I18n.t('scanner')}</Button>
              </div>
            </div>
          ) }
        </Formik>
      </div>
    )
  }
}

export default SerialForm
