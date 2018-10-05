import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'

const apiDomain = 'https://harm-reduction-tracker.herokuapp.com'

const NaloxoneForm = () => (
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
        request.post(`${apiDomain}/clients`)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor='firstName'>First Name</label>
            <Field type='text' name='firstName' />
            <ErrorMessage name='firstName' component='div' />
          </div>

          <div>
            <label htmlFor='lastName'>Last Name</label>
            <Field type='text' name='lastName' />
            <ErrorMessage name='lastName' component='div' />
          </div>

          <div>
            <label htmlFor='dateOfBirthName'>Year Of Birth</label>
            <Field type='text' name='dateOfBirthName' />
            <ErrorMessage name='dateOfBirth' component='div' />
          </div>

          <div>
            <label htmlFor='townCity'>Town/City</label>
            <Field type='text' name='townCity' />
            <ErrorMessage name='townCity' component='div' />
          </div>

          <div>
            <label htmlFor='county'>County</label>
            <Field type='select' name='county' />
            {util.Counties.map((counties, idx) => (
              <option key={idx} value={counties[idx]}>{counties[idx]}</option>
            )
            )}
            <ErrorMessage name='county' component='div' />
          </div>

          <div>
            <label htmlFor='dateOfDistribution'>Date of Distribution</label>
            <Field name='dateOfDistribution' value={moment().format('YYYY-MM-D')} />
            <ErrorMessage name='dateOfDistribution' component='div' />
          </div>

          <div>
            <label htmlFor='numberOfKits'>Number of Naloxone Kits</label>
            <Field type='number' name='numberOfKits' />
            <ErrorMessage name='numberOfKits' component='div' />
          </div>

          <div>
            <label htmlFor='kitType'>Naloxone Kit Type</label>
            <Field component='select' name='kitType'>
              <option value='im'>IM</option>
              <option value='e'>E</option>
              <option value='n'>N</option>
            </Field>
            <ErrorMessage name='kitType' component='div' />
          </div>

          <div>
            <label htmlFor='kitSerialNumber'>Kit Serial Number</label>
            <Field type='text' name='kitSerialNumber' value={window.localStorage.Serial} />
            <ErrorMessage name='kitSerialNumber' component='div' />
          </div>

          <div>
            <label htmlFor='firstNaloxoneKit'>First Ever Naloxone Kit?</label>
            <span className='firstNaloxoneKit'>
              <input type='radio' name='firstNaloxoneKit' value='true' />
              <label htmlFor='reversalTrue'>Yes</label>
              <input type='radio' name='firstNaloxoneKit' value='false' />
              <label htmlFor='reversalFalse'>No</label>
            </span>
            <ErrorMessage name='firstNaloxoneKit' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversal'>Overdose Reversal?</label>
            <span className='overdoseReversal'>
              <input type='radio' name='overdoseReversal' value='true' />
              <label htmlFor='reversalTrue'>Yes</label>
              <input type='radio' name='overdoseReversal' value='false' />
              <label htmlFor='reversalFalse'>No</label>
            </span>
            <ErrorMessage name='overdoseReversal' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversalKitType'>Overdose Reversal Kit Type</label>
            <Field component='select' name='overdoseReversalKitType'>
              <option value='im'>IM</option>
              <option value='e'>E</option>
              <option value='n'>N</option>
            </Field>
            <ErrorMessage name='overdoseReversalKitType' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversalTownCity'>Overdose Reversal Town/City</label>
            <Field type='text' name='overdoseReversalTownCity' />
            <ErrorMessage name='overdoseReversalTownCity' component='div' />
          </div>

          <div>
            <label htmlFor='overdosReversalCounty'>Overdose Reversal County</label>
            <Field type='select' name='overdosReversalCounty' />
            <ErrorMessage name='overdosReversalCounty' component='div' />
          </div>

          <div>
            <label htmlFor='numberOfDoses'>Number of Doses</label>
            <Field type='number' name='numberOfDoses' />
            <ErrorMessage name='numberOfDoses' component='div' />
          </div>

          <div>
            <label htmlFor='minutesBetweenDoses'>Minutes Between Doses</label>
            <Field type='number' name='minutesBetweenDoses' />
            <ErrorMessage name='minutesBetweenDoses' component='div' />
          </div>

          <div>
            <button type='submit' disabled={isSubmitting}>
        Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default NaloxoneForm
