import React from 'react'
import {Button, Control, Label} from 'bloomer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import NaloxoneForm from './NaloxoneForm'

class SerialForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formCount: 1,
      inputtingSerials: true
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
        <Formik
          initialValues={{ serialNumber: kits.map(() => '') }}
          validate={values => {
            console.log('inside validate', values.serialNumber)
            let errors = {}
            errors.serialNumber = []
            for (let i = 0; i < values.serialNumber.length; i++) {
              errors.serialNumber[i] = values.serialNumber[i] ? null : 'required'
            }
            if (errors.serialNumber.every(err => err === null)) {
              delete errors['serialNumber']
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false)
            console.log(values.serialNumber)
            this.props.resultsConcat(values.serialNumber)
            this.props.setForm()
          }}
        >
          {({ isSubmitting }) => (
            <div>
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
              <div>
                <Button className='is-primary' type='button' onClick={this.props.setQr}>Scan QR code</Button>
              </div>
            </div>
          )}
        </Formik>
      </div>
    )
  }
}
export default SerialForm
