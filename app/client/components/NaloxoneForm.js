/* globals I18n */
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button } from 'bloomer'
import 'bulma/css/bulma.css'
import moment from 'moment'
import request from 'superagent'

const apiDomain = 'https://harm-reduction-tracker.herokuapp.com'

const counties = [
  '--Select--',
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
      initialValues={{
        firstName: '',
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
        minutesBetweenDoses: ''
      }}
      validate={values => {
        let errors = {}
        if (!values.firstName) {
          errors.firstName = 'First Name Required'
        }
        if (!values.lastName) {
          errors.lastName = 'Last Name Required'
        }
        if (!values.dateOfBirth || values.dateOfBirth.toString().length !== 4) {
          errors.dateOfBirth = 'Invalid Year'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        return request.post(`${apiDomain}/clients`)
          .send({
            'first_name': values.firstName,
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
            'rtime_between': values.minutesBetweenDoses
          })
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
            <label className='label' htmlFor='firstName'>{I18n.t('first_name')}</label>
            <Field className='input' type='text' name='firstName' />
            <ErrorMessage className='has-text-danger' name='firstName' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='lastName'>{I18n.t('last_name')}</label>
            <Field className='input' type='text' name='lastName' />
            <ErrorMessage className='has-text-danger' name='lastName' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='dateOfBirth'>{I18n.t('birth_year')}</label>
            <Field className='input' type='number' name='dateOfBirth' placeholder='YYYY' />
            <ErrorMessage className='has-text-danger' name='dateOfBirth' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='townCity'>{I18n.t('town_city')}</label>
            <Field className='input' type='text' name='townCity' />
            <ErrorMessage className='has-text-danger' name='townCity' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='county'>{I18n.t('county')}</label>
            <Field component='select' name='county'>
              {counties.map((county, idx) =>
                <option key={idx} value={county}>{county}</option>
              )}
            </Field>
            <ErrorMessage className='has-text-danger' name='county' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='dateOfDistribution'>{I18n.t('distributed')}</label>
            <Field className='input' name='dateOfDistribution' />
            <ErrorMessage className='has-text-danger' name='dateOfDistribution' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='numberOfKits'>{I18n.t('kit_amount')}</label>
            <Field className='input' type='number' name='numberOfKits' />
            <ErrorMessage classame='has-text-danger' name='numberOfKits' component='div' />
          </div>

          <div>
            {props.results.map((result, idx) =>
              <div key={idx}>
                <div>
                  <label className='label' htmlFor={`kitSerialNumber[${idx}]`}>{I18n.t('kit_serial')}</label>
                  <Field className='input' type='text' value={result} name={`kitSerialNumber[${idx}]`} />
                  <ErrorMessage className='has-text-danger' name={`kitSerialNumber[${idx}]`} component='div' />
                </div>
                <label className='label' htmlFor={`kitType[${idx}]`}>{I18n.t('kit_type')}</label>
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
            <label className='label' htmlFor='firstNaloxoneKit'>{I18n.t('first_kit')}</label>
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
            <label className='label' htmlFor='overdoseReversal'>{I18n.t('reversal')}</label>
            <RadioButtonGroup id='overdoseReversal'
              value={values.overdoseReversal}
              error={errors.overdoseReversal}
              touched={touched.overdoseReversal}>
              <Field
                component={RadioButton}
                name='overdoseReversal'
                id='overdoseReversal1'
                label='Yes (please continue)'
                value={'true'}
              />
              <Field
                component={RadioButton}
                name='overdoseReversal'
                id='overdoseReversal2'
                label='No (please submit the form)'
                value={'false'}
              />
            </RadioButtonGroup>
            <ErrorMessage className='has-text-danger' name='overdoseReversal' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='overdoseReversalKitType'>{I18n.t('reversal_kit_type')}</label>
            <Field component='select' name='overdoseReversalKitType'>
              <option className='option' value='selectOptions' >--Select--</option>
              <option value='IM'>IM</option>
              <option value='E'>E</option>
              <option value='N'>N</option>
            </Field>
            <ErrorMessage className='has-text-danger' name='overdoseReversalKitType' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='overdoseReversalTownCity'>{I18n.t('reversal_town')}</label>
            <Field className='input' type='text' name='overdoseReversalTownCity' />
            <ErrorMessage className='has-text-danger' name='overdoseReversalTownCity' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='overdoseReversalCounty'>{I18n.t('reversal_county')}</label>
            <Field component='select' name='overdoseReversalCounty'>
              {counties.map((county, idx) =>
                <option key={idx} value={county}>{county}</option>
              )}
            </Field>
            <ErrorMessage className='has-text-danger' name='overdoseReversalCounty' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='numberOfDoses'>{I18n.t('amount_doses')}</label>
            <Field className='input' type='number' name='numberOfDoses' />
            <ErrorMessage name='numberOfDoses' component='div' />
          </div>

          <div>
            <label className='label' htmlFor='minutesBetweenDoses'>{I18n.t('minutes_doses')}</label>
            <Field className='input' type='number' name='minutesBetweenDoses' />
            <ErrorMessage name='minutesBetweenDoses' component='div' />
          </div>

          <div>
            <button className='button is-primary' type='submit' disabled={isSubmitting} >
              {I18n.t('submit')}
            </button>
            <ErrorMessage className='has-text-danger' name='firstName' component='div' />
            <ErrorMessage className='has-text-danger' name='lastName' component='div' />
            <ErrorMessage className='has-text-danger' name='dateOfBirth' component='div' />
          </div>

          <Button className='is-danger sub-button' onClick={() => (window.location.href = '/kitserials')}>{I18n.t('scanner')}</Button>
          <Button className='is-danger sub-button' onClick={() => (window.location.href = '/kitserials?status=manual')}>{I18n.t('manual')}</Button>
        </Form>
      )}
    </Formik>
  </div>
)

export default NaloxoneForm
