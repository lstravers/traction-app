import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage, isInteger } from 'formik'
import moment from 'moment'
import request from 'superagent/superagent.js'

// const apiDomain = 'https://harm-reduction-tracker.herokuapp.com'
const apiDomain = 'http://localhost:3000'
const counties = [
  'Select',
  'Alamance',
  'Alexander',
  'Alleghany',
  'Anson',
  'Ashe',
  'Avery',
  'Beaufort',
  'Bertie',
  'Bladen',
  'Brunswuick',
  'Buncombe',
  'Burke',
  'Cabarrus',
  'Caldwell',
  'Camden',
  'Carteret',
  'Caswell',
  'Catawba',
  'Chatham',
  'Cherokee',
  'Chowan',
  'Clay',
  'Cleveland',
  'Columbus',
  'Craven',
  'Cumberland',
  'Currituck',
  'Dare',
  'Davidson',
  'Davie',
  'Duplin',
  'Durham',
  'Edgecombe',
  'Forsyth',
  'Franklin',
  'Gaston',
  'Gates',
  'Graham',
  'Granville',
  'Greene',
  'Guilford',
  'Halifax',
  'Harnett',
  'Haywood',
  'Henderson',
  'Hertford',
  'Hoke',
  'Hyde',
  'Iredell',
  'Jackson',
  'Johnston',
  'Jones',
  'Lee',
  'Lenoir',
  'Lincoln',
  'McDowell',
  'Macon',
  'Madison',
  'Martin',
  'Mecklenburg',
  'Mitchell',
  'Montgomery',
  'Moore',
  'Nash',
  'New Hanover',
  'Northampton',
  'Onslow',
  'Orange',
  'Pamlico',
  'Pasquotank',
  'Pender',
  'Perquimans',
  'Person',
  'Pitt',
  'Polk',
  'Randolph',
  'Richmond',
  'Robeson',
  'Rockingham',
  'Rowan',
  'Rutherford',
  'Sampson',
  'Scotland',
  'Stanly',
  'Stokes',
  'Surry',
  'Swain',
  'Transylvania',
  'Tyrrell',
  'Union',
  'Vance',
  'Wake',
  'Warren',
  'Washington',
  'Watauga',
  'Wayne',
  'Wilkes',
  'Wilson',
  'Yadkin',
  'Yancey'
]

const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  ...props
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type='radio'
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  children
}) => {
  return (
    <div>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched}
      </fieldset>
    </div>
  )
}

const NaloxoneForm = (props) => (
  <div>
    <Formik
      initialValues={{ firstName: '',
        lastName: '',
        dateOfBirth: '',
        townCity: '',
        county: props.county,
        dateOfDistribution: moment().format('YYYY-MM-D'),
        numberOfKits: props.results.length,
        kitType: props.value,
        kitSerialNumber: props.results,
        firstNaloxoneKit: props.value,
        overdoseReversal: props.value,
        overdoseReversalKitType: props.value,
        overdoseReversalTownCity: '',
        overdoseReversalCounty: props.county,
        numberOfDoses: '',
        minutesBetweenDoses: '' }}
      validate={values => {
        let errors = {}
        if (!values.firstName) {
          errors.firstName = 'Required'
        }
        if (!values.lastName) {
          errors.lastName = 'Required'
        }
        if (!values.dateOfBirth) {
          errors.dateOfBirth = 'Required'
        }
        return errors
      }}

      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        return request.post(`${apiDomain}/clients`)
          .send({firstName: '',
            lastName: '',
            dateOfBirth: '',
            townCity: '',
            county: props.county,
            dateOfDistribution: moment().format('YYYY-MM-D'),
            numberOfKits: props.results.length,
            kitType: props.value,
            kitSerialNumber: props.results,
            firstNaloxoneKit: '',
            overdoseReversal: props.value,
            overdoseReversalKitType: props.value,
            overdoseReversalTownCity: '',
            overdoseReversalCounty: props.county,
            numberOfDoses: '',
            minutesBetweenDoses: '' })
          .then(setSubmitting(false))
      }

      }
    >
      {({ isSubmitting }) => (
        <Form className='form'>
          <div className='form-instructions'><p>Please fill out the following form</p></div>
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
            <label htmlFor='dateOfBirth'>Year Of Birth</label>
            <Field type='number' name='dateOfBirth' placeholder='YYYY' />
            <ErrorMessage name='dateOfBirth' component='div' />
          </div>

          <div>
            <label htmlFor='townCity'>Town/City</label>
            <Field type='text' name='townCity' />
            <ErrorMessage name='townCity' component='div' />
          </div>

          <div>
            <label htmlFor='county'>County</label>
            <Field component='select' name='county'>
              {counties.map((county, idx) =>
                <option key={idx} value={county} onChange={props.handleChange}>{county}</option>
              )}
            </Field>
            <ErrorMessage name='county' component='div' />
          </div>

          <div>
            <label htmlFor='dateOfDistribution'>Date of Distribution</label>
            <Field name='dateOfDistribution' />
            <ErrorMessage name='dateOfDistribution' component='div' />
          </div>

          <div>
            <label htmlFor='numberOfKits'>Number of Naloxone Kits</label>
            <Field type='number' name='numberOfKits' />
            <ErrorMessage name='numberOfKits' component='div' />
          </div>

          <div>
            {props.results.map((result, idx) =>
              <div key={idx}>
                <div>
                  <label htmlFor='kitSerialNumber'>Kit Serial Number</label>
                  <Field type='text' value={result} name='kitSerialNumber' />
                  <ErrorMessage name='kitSerialNumber' component='div' />
                </div>
                <label htmlFor='kitType'>Naloxone Kit Type</label>
                <Field component='select' name={'kitType' + [idx]}>
                  <option onChange={props.handleChange}>IM</option>
                  <option onChange={props.handleChange}>E</option>
                  <option onChange={props.handleChange}>N</option>
                </Field>
                <ErrorMessage name='kitType' component='div' />
              </div>
            )}
          </div>

          <div>
            <label htmlFor='firstNaloxoneKit'>First Ever Naloxone Kit?</label>
            {/* <span className='firstNaloxoneKit'>
              <input type='radio' name='firstNaloxoneKit' id='true' value='true' />
              <label htmlFor='firstNaloxoneKit'>Yes</label>
              <input type='radio' name='firstNaloxoneKit' id='false' value='false' />
              <label htmlFor='firtNaloxoneKit'>No</label>
            </span> */}
            <RadioButtonGroup id='firstNaloxoneKit'>
              <Field
                component={RadioButton}
                name='firstNaloxoneKit'
                id='firstNaloxoneKit'
                label='Yes'
                value={'true'}
                onChange={props.handleChange}
              />
              <Field
                component={RadioButton}
                name='firstNaloxoneKit'
                id='firstNaloxoneKit'
                label='No'
                value={'false'}
                onChange={props.handleChange}
              />
            </RadioButtonGroup>
            <ErrorMessage name='firstNaloxoneKit' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversal'>Overdose Reversal?</label>
            <RadioButtonGroup id='overdoseReversal'>
              <Field
                component={RadioButton}
                name='overdoseReversal'
                id='overdoseReversal'
                label='Yes'
                value={'true'}
                onChange={props.handleChange}
              />
              <Field
                component={RadioButton}
                name='overdoseReversal'
                id='overdoseReversal'
                label='No'
                value={'false'}
                onChange={props.handleChange}
              />
            </RadioButtonGroup>
            <ErrorMessage name='overdoseReversal' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversalKitType'>Overdose Reversal Kit Type</label>
            <Field component='select' name='overdoseReversalKitType'>
              <option value='selectOptions'onChange={props.handleChange}>Select</option>
              <option value='IM' onChange={this.handleChange}>IM</option>
              <option value='E' onChange={this.handleChange}>E</option>
              <option value='N' onChange={this.handleChange}>N</option>
            </Field>
            <ErrorMessage name='overdoseReversalKitType' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversalTownCity'>Overdose Reversal Town/City</label>
            <Field type='text' name='overdoseReversalTownCity' />
            <ErrorMessage name='overdoseReversalTownCity' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversalCounty'>Overdose Reversal County</label>
            <Field component='select' name='overdoseReversalCounty'>
              {counties.map((county, idx) =>
                <option key={idx} value={county} onChange={this.handleChange}>{county}</option>
              )}
            </Field>
            <ErrorMessage name='overdoseReversalCounty' component='div' />
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

          <div className='submit-button-div'>
            <button type='submit' className='submit-button' disabled={isSubmitting}>
        Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default NaloxoneForm
