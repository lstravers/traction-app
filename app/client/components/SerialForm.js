import React from 'react'
import {Button, Control, Label} from 'bloomer'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import NaloxoneForm from './NaloxoneForm'
import QrReader from 'react-qr-reader'
import Header from './Header'
// import PropTypes from 'prop-types'

class SerialForm extends React.Component {
  constructor () {
    super()
    this.state = {
      formCount: 1,
      inputtingSerials: true,
      results: [],
      delay: 1000,
      scanning: true
    }
    this.addInputForm = this.addInputForm.bind(this)
    this.deleteInputForm = this.deleteInputForm.bind(this)
    this.handleScan = this.handleScan.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  handleScan (data) {
    let results = this.state.results
    if (data) {
      this.setState({
        results: results.concat(data)
      })
    }
  }

  handleError (err) {
    console.error(err)
  }

  handleSubmit () {
    if (this.state.results.length === 0) {
    } else {
      this.setState(state => ({ scanning: !state.scanning }))
    }
  }

  render () {
    const kits = []
    for (let i = 0; i < this.state.formCount; i++) {
      kits.push(i)
    }
    if (this.state.inputtingSerials === true) {
      return (
        <div>
          <div>
            <Header />
          </div>
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

              </Formik>
              )
              : <div>
          (
                <div>
                  <div>
                    <Header />
                  </div>
                  <NaloxoneForm results={this.state.results} />
                </div>
          )
              </div>
            }

          </div>
        </div>

      )
    }
    if (this.state.scanning === true) {
      return (
        <div>
          <div>
            <Header />
          </div>
          {this.state.scanning ? (
            <div className='scan-container'>
              <div className='exit-button-div'><button className='exit-button' onClick={() => window.location.href = '/'}>X</button></div>
              <QrReader
                delay={this.state.delay}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '50%' }}
              />
              <div className='serial-button-div'><button className='serial-button' onClick={() => window.location.href = '/kitserials'}>Enter Serial #</button></div>
              <div className='done-button-div'><button className='done-button' onClick={this.handleSubmit}>Done</button></div>
            </div>)
            : (
              <div>
                <div>
                  <Header />
                </div>
                <NaloxoneForm results={this.state.results} />
              </div>

            )
          }
        </div>
      )
    }
  }
}
export default SerialForm
