/* globals I18n */
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'
import request from 'superagent'

const apiDomain = 'https://harm-reduction-tracker.herokuapp.com'
// const apiDomain = 'http://localhost:3000'

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
          <div className='form-instructions'><p>{I18n.t('intro_form')}</p></div>
          <div>
            <label htmlFor='firstName'>{I18n.t('first_name')}</label>
            <Field type='text' name='firstName' />
            <ErrorMessage name='firstName' component='div' />
          </div>

          <div>
            <label htmlFor='lastName'>{I18n.t('last_name')}</label>
            <Field type='text' name='lastName' />
            <ErrorMessage name='lastName' component='div' />
          </div>

          <div>
            <label htmlFor='dateOfBirth'>{I18n.t('birth_year')}</label>
            <Field type='number' name='dateOfBirth' placeholder='YYYY' />
            <ErrorMessage name='dateOfBirth' component='div' />
          </div>

          <div>
            <label htmlFor='townCity'>{I18n.t('town_city')}</label>
            <Field type='text' name='townCity' />
            <ErrorMessage name='townCity' component='div' />
          </div>

          <div>
            <label htmlFor='county'>{I18n.t('county')}</label>
            <Field component='select' name='county'>
              {counties.map((county, idx) =>
                <option key={idx} value={county}>{county}</option>
              )}
            </Field>
            <ErrorMessage name='county' component='div' />
          </div>

          <div>
            <label htmlFor='dateOfDistribution'>{I18n.t('distributed')}</label>
            <Field name='dateOfDistribution' />
            <ErrorMessage name='dateOfDistribution' component='div' />
          </div>

          <div>
            <label htmlFor='numberOfKits'>{I18n.t('kit_amount')}</label>
            <Field type='number' name='numberOfKits' />
            <ErrorMessage name='numberOfKits' component='div' />
          </div>

          <div>
            {props.results.map((result, idx) =>
              <div key={idx}>
                <div>
                  <label htmlFor={`kitSerialNumber[${idx}]`}>{I18n.t('kit_serial')}</label>
                  <Field type='text' value={result} name={`kitSerialNumber[${idx}]`} />
                  <ErrorMessage name={`kitSerialNumber[${idx}]`} component='div' />
                </div>
                <label htmlFor={`kitType[${idx}]`}>{I18n.t('kit_type')}</label>
                <Field component='select' name={`kitType[${idx}]`}>
                  <option value='IM'>IM</option>
                  <option value='E'>E</option>
                  <option value='N'>N</option>
                </Field>
                <ErrorMessage name={`kitType[${idx}]`} component='div' />
              </div>
            )}
          </div>

          <div>
            <label htmlFor='firstNaloxoneKit'>{I18n.t('first_kit')}</label>
            <RadioButtonGroup id='firstNaloxoneKit'
              value={values.overdoseReversal}
              error={errors.overdoseReversal}
              touched={touched.overdoseReversal}>
              <Field
                component={RadioButton}
                name='firstNaloxoneKit'
                id='firstNaloxoneKit1'
                label='Yes'
                value={'true'}
              />
              <Field
                component={RadioButton}
                name='firstNaloxoneKit'
                id='firstNaloxoneKit2'
                label='No'
                value={'false'}
              />
            </RadioButtonGroup>
            <ErrorMessage name='firstNaloxoneKit' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversal'>{I18n.t('reversal')}</label>
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
            <ErrorMessage name='overdoseReversal' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversalKitType'>{I18n.t('reversal_kit_type')}</label>
            <Field component='select' name='overdoseReversalKitType'>
              <option value='selectOptions'>Select</option>
              <option value='IM'>IM</option>
              <option value='E'>E</option>
              <option value='N'>N</option>
            </Field>
            <ErrorMessage name='overdoseReversalKitType' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversalTownCity'>{I18n.t('reversal_town')}</label>
            <Field type='text' name='overdoseReversalTownCity' />
            <ErrorMessage name='overdoseReversalTownCity' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversalCounty'>{I18n.t('reversal_county')}</label>
            <Field component='select' name='overdoseReversalCounty'>
              {counties.map((county, idx) =>
                <option key={idx} value={county}>{county}</option>
              )}
            </Field>
            <ErrorMessage name='overdoseReversalCounty' component='div' />
          </div>

          <div>
            <label htmlFor='numberOfDoses'>{I18n.t('amount_doses')}</label>
            <Field type='number' name='numberOfDoses' />
            <ErrorMessage name='numberOfDoses' component='div' />
          </div>

          <div>
            <label htmlFor='minutesBetweenDoses'>{I18n.t('minutes_doses')}</label>
            <Field type='number' name='minutesBetweenDoses' />
            <ErrorMessage name='minutesBetweenDoses' component='div' />
          </div>

          <div className='submit-button-div'>
            <button type='submit' className='submit-button' disabled={isSubmitting}>
              {I18n.t('submit')}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default NaloxoneForm
