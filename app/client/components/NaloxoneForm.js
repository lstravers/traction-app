import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

class NaloxoneForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      result: this.props.result
    }
  }

  render () {
    return (
      <div>
        <Formik
          initialValues={{ firstName: '', lastName: '', dateOfBirth: '', townCity: '', county: '', dateOfDistribution: '', numberOfKits: '', kitType: '', kitSerialNumber: '', firstNaloxoneKit: '', overdoseReversal: '', overdoseReversalKitType: '', overdoseReversalTownCity: '', overdoseReversalCounty: '', numberOfDoses: '', minutesBetweenDoses: '' }}
          validate={values => {
            let errors = {}
            if (!values.firstName || !values.lastName || !values.dateOfBirth) {
              errors.firstName = 'Required'
              errors.lastName = 'Required'
              errors.dateOfBirth = 'Required'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            window.alert('Submitted')
            setSubmitting(false)
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label htmlFor='firstName'>First Name</label>
              <Field type='text' name='firstName' />
              <ErrorMessage name='firstName' component='div' />

              <label htmlFor='lastName'>Last Name</label>
              <Field type='text' name='lastName' />
              <ErrorMessage name='lastName' component='div' />

              <label htmlFor='dateOfBirthName'>Date Of Birth</label>
              <Field type='text' name='dateOfBirthName' />
              <ErrorMessage name='dateOfBirth' component='div' />

              <label htmlFor='townCity'>Town/City</label>
              <Field type='text' name='townCity' />
              <ErrorMessage name='townCity' component='div' />

              <label htmlFor='county'>County</label>
              <Field type='select' name='county' />
              <ErrorMessage name='county' component='div' />

              <label htmlFor='dateOfDistribution'>Date of Distribution</label>
              <Field type='date' name='dateOfDistribution' />
              <ErrorMessage name='dateOfDistribution' component='div' />

              <label htmlFor='numberOfKits'>Number of Naloxone Kits</label>
              <Field type='number' name='numberOfKits' />
              <ErrorMessage name='numberOfKits' component='div' />

              <label htmlFor='kitType'>Naloxone Kit Type</label>
              <Field type='text' name='kitType' />
              <ErrorMessage name='kitType' component='div' />

              <label htmlFor='kitSerialNumber'>Kit Serial Number</label>
              <Field type='text' name='kitSerialNumber' value={window.localStorage.Serial} />
              <ErrorMessage name='kitSerialNumber' component='div' />

              <label htmlFor='firstNaloxoneKit'>First Naloxone Kit</label>
              <Field type='boolean' name='firstNaloxoneKit' />
              <ErrorMessage name='firstNaloxoneKit' component='div' />

              <label htmlFor='overdoseReversal'>Overdose Reversal?</label>
              <Field type='boolean' name='overdoseReversal' />
              <ErrorMessage name='overdoseReversal' component='div' />

              <label htmlFor='overdoseReversalKitType'>Overdose Reversal Kit Type</label>
              <Field type='select' name='overdoseReversalKitType' />
              <ErrorMessage name='overdoseReversalKitType' component='div' />

              <label htmlFor='overdoseReversalTownCity'>Overdose Reversal Town/City</label>
              <Field type='text' name='overdoseReversalTownCity' />
              <ErrorMessage name='overdoseReversalTownCity' component='div' />

              <label htmlFor='overdosReversalCounty'>Overdose Reversal County</label>
              <Field type='select' name='overdosReversalCounty' />
              <ErrorMessage name='overdosReversalCounty' component='div' />

              <label htmlFor='numberOfDoses'>Number of Doses</label>
              <Field type='number' name='numberOfDoses' />
              <ErrorMessage name='numberOfDoses' component='div' />

              <label htmlFor='minutesBetweenDoses'>Minutes Between Doses</label>
              <Field type='number' name='minutesBetweenDoses' />
              <ErrorMessage name='minutesBetweenDoses' component='div' />

              <button type='submit' disabled={isSubmitting}>
        Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    ) 
}
}

export default NaloxoneForm
