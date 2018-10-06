import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

class SerialForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formCount: 3
    }
    this.addInputForm = this.addInputForm.bind(this)
  }

  addInputForm () {
    this.setState({
      formCount: this.state.formCount + 1
    })
  }
  render () {
    const kitForms = []
    for (let i = 0; i < this.state.formCount; i++) {
      kitForms.push(
        <div key={i}>
          <label htmlFor='enterSerialNumber'>Enter Kit Serial Number</label>
          <Field type='text' name='enterSerialNumber' />
          <ErrorMessage name='enterSerialNumber' component='div' />
        </div>)
    }
    return (
      <div>
        <Formik
          initialValues={{ enterSerialNumer: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
          }}
          validate={values => {
            let errors = {}
            if (!values.enterSerialNumer) {
              errors.enterSerialNumer = 'Required'
            }
            return errors
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              {kitForms}
              <button type='button' onClick={this.addInputForm}>Add</button>
              <button type='submit' disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}
export default SerialForm
