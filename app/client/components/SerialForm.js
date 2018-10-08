import React from 'react'
import {Button, Control, Label} from 'bloomer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import NaloxoneForm from './NaloxoneForm'

class SerialForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formCount: 1,
      inputtingSerials: true,
      results: []
    }
    this.addInputForm = this.addInputForm.bind(this)
    this.deleteInputForm = this.deleteInputForm.bind(this)
  }

  addInputForm () {
    this.setState({
      formCount: this.state.formCount + 1
    })
  }

  deleteInputForm () {
    this.setState({
      formCount: this.state.formCount - 1
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
            initialValues={{ serialNumber: kits.map(() => '') }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false)
              console.log(values)
              let results = this.state.results
              this.setState({
                results: results.concat(values.serialNumber),
                inputtingSerials: false
              })
            }}
            validate={values => {
              let errors = {}
              if (!values.serialNumber) {
                errors.serialNumber = 'Required'
              }
              return errors
            }}
            handleChange
          >
            {({ isSubmitting }) => (
              <Form>
                {kits.map(i => (
                  <Control key={i}>
                    <Label htmlFor={`serialNumber[${i}]`}>Enter serial number</Label>
                    <Field type='text' name={`serialNumber[${i}]`} />
                    <ErrorMessage name={`serialNumber[${i}]`} component='div' />
                  </Control>
                ))}
                <Button className='is-primary' type='button' onClick={this.addInputForm}>Add Input</Button>
                <Button className='is-primary' type='button' onClick={this.deleteInputForm}>Delete Input</Button>
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
