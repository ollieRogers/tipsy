import { useFormik } from 'formik'
import { Box, Button, FormField, TextInput } from 'grommet'
import { Previous, Update } from 'grommet-icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'

import { useHistory } from 'react-router-dom'
import { SERVICE_CHARGE } from '../../constants/fieldNames'
import { updateServiceCharge } from '../../store/bill/actions'
import { serviceChargePercSelector } from '../../store/bill/reducer'

const serviceChargeSchema = Yup.object().shape({
  [SERVICE_CHARGE]: Yup.number()
    .min(0, 'too low!')
    .max(100, 'too high!')
    .required('enter a tip as a %!'),
})

export const ServiceChargeForm = () => {
  const dispatch = useDispatch()
  const [touched, setTouched] = React.useState(false)
  const serviceChargePerc = useSelector(serviceChargePercSelector)
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      [SERVICE_CHARGE]: '',
    },
    onSubmit: (submittedValues) => {
      dispatch(updateServiceCharge(parseFloat(submittedValues[SERVICE_CHARGE])))
      setTouched(false)
      formik.handleReset(true)
      history.push('/summary')
    },
    validationSchema: serviceChargeSchema,
    validateOnChange: touched,
  })

  const { handleSubmit, handleChange, values, errors } = formik
  return (
    <form onSubmit={handleSubmit}>
      <Box
        margin={{ top: 'medium' }}
        gap="small"
      >
        <FormField label="Enter service charge" error={errors[SERVICE_CHARGE]}>
          <TextInput
            placeholder={`${serviceChargePerc}%`}
            id={SERVICE_CHARGE}
            name={SERVICE_CHARGE}
            type="number"
            onChange={handleChange}
            value={values[SERVICE_CHARGE]}
          />
        </FormField>
        <Box
          margin={{ top: 'medium' }}
          direction="row"
          gap="medium"
          pad="medium"
          width="medium"
          align="center"
          justify="between"
        >
          <Button
            label="back"
            size="large"
            icon={<Previous/>}
            onClick={() => history.push('/summary')}
            plain={false}
          />
          <Button
            label="update"
            size="large"
            type="submit"
            icon={<Update />}
            onClick={() => setTouched(true)}
            primary
          />
        </Box>
      </Box>
    </form>
  )
}
