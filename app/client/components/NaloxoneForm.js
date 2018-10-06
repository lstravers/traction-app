import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'

const apiDomain = 'https://harm-reduction-tracker.herokuapp.com'
const counties = [
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
  field: { name, value },
  id,
  label,
  className
}) => {
  return (
    <div>
      <input
        name={name}
        id={id}
        type='radio'
        value={value}
      />
      <label htmlFor={id}>{label}</label>
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
        kitType: 'IM',
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
        if (!values.dateOfBirth) {
          errors.dateOfBirth = 'Required'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        { /* request.post(`${apiDomain}/clients`) */ }
        console.log(values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div><p>Please fill out the following form</p></div>
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
            <Field type='text' name='dateOfBirth' />
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
                <option key={idx}>`${county}`</option>
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
                <Field component='select' name='kitType'>
                  <option value='IM'>IM</option>
                  <option value='E'>E</option>
                  <option value='N'>N</option>
                </Field>
                <ErrorMessage name='kitType' component='div' />
              </div>
            )}
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
              <div><Field
                component={RadioButton}
                name='overdoseReversalTrue'
                id='true'
                label='Yes'
                value='True'
              /></div>
              <div><Field
                component={RadioButton}
                name='overdoseReversalFalse'
                id='false'
                label='No'
                value='False'
              /></div>
            </span>
            <ErrorMessage name='overdoseReversal' component='div' />
          </div>

          <div>
            <label htmlFor='overdoseReversalKitType'>Overdose Reversal Kit Type</label>
            <Field component='select' name='overdoseReversalKitType'>
              <option value='selectOptions'>Select</option>
              <option value='IM'>IM</option>
              <option value='E'>E</option>
              <option value='N'>N</option>
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
            <Field type='text' name='overdoseReversalCounty'>
              {counties.map((county, idx) =>
                <option key={idx}>`${county}`</option>
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
