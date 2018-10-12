import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import 'bulma/css/bulma.css'
import moment from 'moment'
import request from 'superagent'

// const apiDomain = 'http://harm-reduction-tracker.herokuapp.com'
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
  'Brunswick',
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
        county: '',
        dateOfDistribution: moment().format('YYYY-MM-D'),
        numberOfKits: props.results.length,
        kitType: props.results.map(() => 'IM'),
        kitSerialNumber: props.results,
        firstNaloxoneKit: '',
        overdoseReversal: '',
        overdoseReversalKitType: '',
        overdoseReversalTownCity: '',
        overdoseReversalCounty: '',
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
        if (!values.dateOfBirth || values.dateOfBirth.toString().length !== 4) {
          errors.dateOfBirth = 'Invalid Year'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        return request.post(`${apiDomain}/clients`)
          .send({'first_name': values.firstName,
            'last_name': values.lastName,
            'date_of_birth': values.dateOfBirth,
            'city': values.townCity,
            'county': values.county,
            'distributed_date': values.dateOfDistribution,
            'kit_type': values.kitType,
            'serial_num': values.kitSerialNumber,
            'first_kit': values.firstNaloxoneKit,
            'overdoseReversal': values.overdoseReversal,
            'rkit_type': values.overdoseReversalKitType,
            'rtown': values.overdoseReversalTownCity,
            'rcounty': values.overdoseReversalCounty,
            'rdoses': values.numberOfDoses,
            'rtime_between': values.minutesBetweenDoses })
          .then(setSubmitting(false))
          .then(() => props.resetForm())
          .then(() => props.setThankYou())
      }

      }
    >
      {({ isSubmitting, values, errors, touched, handleReset }) => (
        <Form className='form'>
          <div className='form-instructions'><p>Please fill out the following form</p></div>
          <div>
            <label className='label' htmlFor='firstName'>First Name</label>
            <Field className='input' type='text' name='firstName' />
            <ErrorMessage className='has-tex-danger' name='firstName' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='lastName'>Last Name</label>
            <Field className='input' type='text' name='lastName' />
            <ErrorMessage classame='has-text-danger' name='lastName' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='dateOfBirth'>Year Of Birth</label>
            <Field className='input' type='number' name='dateOfBirth' placeholder='YYYY' />
            <ErrorMessage className='has-text=-danger' name='dateOfBirth' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='townCity'>Town/City</label>
            <Field className='input' type='text' name='townCity' />
            <ErrorMessage className='has-text-danger' name='townCity' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='county'>County</label>
            <Field className='input'component='select' name='county'>
              {counties.map((county, idx) =>
                <option key={idx} value={county}>{county}</option>
              )}
            </Field>
            <ErrorMessage className='has-text-danger' name='county' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='dateOfDistribution'>Date of Distribution</label>
            <Field className='input' name='dateOfDistribution' />
            <ErrorMessage className='has-text-danger' name='dateOfDistribution' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='numberOfKits'>Number of Naloxone Kits</label>
            <Field className='input' type='number' name='numberOfKits' />
            <ErrorMessage classame='has-text-danger' name='numberOfKits' component='div' />
          </div>

          <div>
            {props.results.map((result, idx) =>
              <div key={idx}>
                <div>
                  <label className='label' htmlFor={`kitSerialNumber[${idx}]`}>Kit Serial Number</label>
                  <Field className='input' type='text' value={result} name={`kitSerialNumber[${idx}]`} />
                  <ErrorMessage className='has-text-danger' name={`kitSerialNumber[${idx}]`} component='div' />
                </div>
                <label className='label' htmlFor={`kitType[${idx}]`}>Naloxone Kit Type</label>
                <Field component='select' name={`kitType[${idx}]`}>
                  <option>IM</option>
                  <option>E</option>
                  <option>N</option>
                </Field>
                <ErrorMessage className='has-text-danger' name={`kitType[${idx}]`} component='div' />
              </div>
            )}
          </div>

          <div>
            <label className='label'htmlFor='firstNaloxoneKit'>First Ever Naloxone Kit?</label>
            <RadioButtonGroup id='firstNaloxoneKit'
              value={values.overdoseReversal}
              error={errors.overdoseReversal}
              touched={touched.overdoseReversal}>
              <Field className='radio'
                component={RadioButton}
                name='firstNaloxoneKit'
                id='firstNaloxoneKit1'
                label='Yes'
                value={'true'}
              />
              <Field className='radio'
                component={RadioButton}
                name='firstNaloxoneKit'
                id='firstNaloxoneKit2'
                label='No'
                value={'false'}
              />
            </RadioButtonGroup>
            <ErrorMessage className='has-text-danger' name='firstNaloxoneKit' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='overdoseReversal'>Overdose Reversal?</label>
            <RadioButtonGroup id='overdoseReversal'
              value={values.overdoseReversal}
              error={errors.overdoseReversal}
              touched={touched.overdoseReversal}>
              <Field
                component={RadioButton}
                name='overdoseReversal'
                id='overdoseReversal1'
                label='Yes'
                value={'true'}
              />
              <Field
                component={RadioButton}
                name='overdoseReversal'
                id='overdoseReversal2'
                label='No'
                value={'false'}
              />
            </RadioButtonGroup>
            <ErrorMessage className='has-text-danger' name='overdoseReversal' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='overdoseReversalKitType'>Overdose Reversal Kit Type</label>
            <Field className='select' component='select' name='overdoseReversalKitType'>
              <option className='option' value='selectOptions'onChange={props.handleChange}>Select</option>
              <option value='IM'>IM</option>
              <option value='E'>E</option>
              <option value='N'>N</option>
            </Field>
            <ErrorMessage className='has-text-danger' name='overdoseReversalKitType' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='overdoseReversalTownCity'>Overdose Reversal Town/City</label>
            <Field className='input' type='text' name='overdoseReversalTownCity' />
            <ErrorMessage className='has-text-danger' name='overdoseReversalTownCity' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='overdoseReversalCounty'>Overdose Reversal County</label>
            <Field component='select' name='overdoseReversalCounty'>
              {counties.map((county, idx) =>
                <option key={idx} value={county}>{county}</option>
              )}
            </Field>
            <ErrorMessage className='has-text-danger' name='overdoseReversalCounty' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='numberOfDoses'>Number of Doses</label>
            <Field className='input' type='number' name='numberOfDoses' />
            <ErrorMessage name='numberOfDoses' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='minutesBetweenDoses'>Minutes Between Doses</label>
            <Field className='input' type='number' name='minutesBetweenDoses' />
            <ErrorMessage name='minutesBetweenDoses' component='div' />
          </div>

          <div>
            <button className='button is-danger' type='submit' disabled={isSubmitting} >
        Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default NaloxoneForm
