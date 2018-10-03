import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const NaloxoneForm = () => (
  <div>
    <Formik
      initialValues={{ firstName: '', lastName: '', dateOfBirth: '', townCity: '', county: '', dateOfDistribution: '', numberOfKits: '', kitType: '', kitSerialNumber: '', firstNaloxoneKit: '', overdoseReversal: '', overdoseReversalKitType: '', overdoseReversalTownCity: '', overdoseReversalCounty: '', numberOfDoses: '', minutesBetweenDoses: '' }}
      validate={values => {
        let errors = {}
        if (!values.firstName4) {
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
          <button type='submit' disabled={isSubmitting}>
        Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default NaloxoneForm
