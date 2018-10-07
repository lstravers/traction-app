import React from 'react'
import {Button, Input} from 'bloomer'
import { Formik, Form, ErrorMessage } from 'formik'
import NaloxoneForm from './NaloxoneForm'

class SerialForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formCount: 3,
      inputtingSerials: true,
      input: '',
      inputArr: [],
      results: []
    }
    this.addInputForm = this.addInputForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  addInputForm () {
    this.setState({
      formCount: this.state.formCount + 1
    })
  }

  onBlur () {
    let input = this.state.input
    let inputArr = this.state.inputArr
    if (input) {
      this.setState({
        inputArr: inputArr.concat(input)
      })
    }
  }

  handleChange (e) {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState(state => ({ inputtingSerials: !this.state.inputtingSerials }))

    let results = this.state.results
    let inputArr = this.state.inputArr
    if (inputArr) {
      this.setState({
        results: results.concat(inputArr)
      })
    }
  }

  render () {
    const kitForms = []
    for (let i = 0; i < this.state.formCount; i++) {
      kitForms.push(
        <div key={i}>
          <div><label htmlFor='enterSerialNumber'>Enter Kit Serial Number</label></div>
          <Input type='text' name='enterSerialNumber' onBlur={this.onBlur} onChange={this.handleChange} />
          <ErrorMessage name='enterSerialNumber' component='div' />
        </div>)
    }
    return (
      <div className='form-container'>
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
                <Button className='is-primary' type='button' onClick={this.addInputForm}>Add</Button>
                <Button className='is-primary button' type='submit' onClick={this.handleSubmit} disabled={isSubmitting}>Submit</Button>
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
