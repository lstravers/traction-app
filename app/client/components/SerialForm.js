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
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a onClick={() => arrayHelpers.remove([i])}><i className='fas fa-times-circle has-text-danger align' /></a></Label>
                        <Field className='input' type='text' name={`serialNumbers[${i}]`} />
                        <ErrorMessage className='has-text-danger' name={`serialNumbers[${i}]`} component='div' />
                      </Control>
                    ))}
                    <Button className='button is-danger' type='button' onClick={() => arrayHelpers.push('')}>{I18n.t('add')}</Button>
                  </React.Fragment>
                )} />
                <Button className='button is-danger' type='submit' disabled={isSubmitting}>{I18n.t('submit')}</Button>
              </Form>
              <div>
                <Button className='button is-danger' type='button' onClick={this.props.setQr}>{I18n.t('scanner')}</Button>
              </div>
            </div>
          ) }
        </Formik>
      </div>
    )
  }
}

export default SerialForm
