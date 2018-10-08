import React from 'react'
import {Button, Input, Control, Label} from 'bloomer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import NaloxoneForm from './NaloxoneForm'

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
    this.onBlur = this.onBlur.bind(this)
  }

  addInputForm () {
    this.setState({
      formCount: this.state.formCount + 1
    })
  }

  render () {
    const kits = []
    for (let i = 0; i < this.state.formCount; i++) {
      kits.push(i)
    }
    return (
      <div className='form-container'>
        {this.state.inputtingSerials
          ? (<Formik
            initialValues={{ enterSerialNumber: kits.map(() => '1') }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false)
            }}
            validate={values => {
              let errors = {}
              if (!values.enterSerialNumber) {
                errors.enterSerialNumber = 'Serial Number Required'
              }
              return errors
            }}
            handleChange
          >
            {({ isSubmitting }) => (
              <Form>
                {kits.map(i => (
                  <Control key={i}>
                    <Label htmlFor={`enterSerialNumber[${i}]`}>Enter serial number</Label>
                    <Field type='text' name={`enterSerialNumber[${i}]`} />
                  </Control>
                ))}
                <Button className='is-primary' type='button' onClick={this.addInputForm}>Add</Button>
                <Button className='is-primary button' type='submit' disabled={isSubmitting}>Submit</Button>
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
