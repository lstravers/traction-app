import React from 'react'
import NaloxoneForm from './NaloxoneForm'
import { Formik, Form, Field, ErrorMessage } from 'formik'

class SerialForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formCount: 3,
      inputtingSerials: true,
      results: []
    }
    this.addInputForm = this.addInputForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  addInputForm () {
    this.setState({
      formCount: this.state.formCount + 1
    })
  }

  handleChange (e) {
    let results = this.state.results
    this.setState({
      results: results.concat(e.target.value)
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState(state => ({ inputtingSerials: !this.state.inputtingSerials }))
  }

  render () {
    const kitForms = []
    for (let i = 0; i < this.state.formCount; i++) {
      kitForms.push(
        <div key={i}>
          <label htmlFor='enterSerialNumber'>Enter Kit Serial Number</label>
          <Field type='text' name='enterSerialNumber' onChange={this.handleChange} />
          <ErrorMessage name='enterSerialNumber' component='div' />
        </div>)
    }
    return (
      <div>
        {this.state.inputtingSerials
          ? (<Formik
            initialValues={{ enterSerialNumer: '' }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false)
            }}
            validate={values => {
              let errors = {}
              if (!values.enterSerialNumer) {
                errors.enterSerialNumer = 'Serial Number Required'
              }
              return errors
            }}
            handleChange
          >
            {({ isSubmitting }) => (
              <Form>
                {kitForms}
                <button type='button' onClick={this.addInputForm}>Add</button>
                <button type='submit' onClick={this.handleSubmit} disabled={isSubmitting}>Submit</button>
              </Form>
            )}
          </Formik>)
          : <div>
        (
            <NaloxoneForm results={this.state.results} />
        )
          </div>
        }

      </div>
    )
  }
}
export default SerialForm
