import { useFormik } from 'formik'
import * as React from 'react'
import nextId from 'react-id-generator'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { Box, Button, FormField, Text, TextInput } from 'grommet'
import { Add } from 'grommet-icons'
import { ITEM_NAME, ITEM_PRICE } from '../../constants/fieldNames'
import { BILL_ITEM_ID_PREFIX } from '../../constants/idPrefix'
import { addBillItem } from '../../store/bill/actions'

const billItemSchema = Yup.object().shape({
  [ITEM_NAME]: Yup.string()
    .min(2, 'too short')
    .max(50, 'too long')
    .required('enter a name'),
  [ITEM_PRICE]: Yup.number()
    .required('enter a price'),

})

export const AddBillItemForm = () => {
  const [touched, setTouched] = React.useState(false)
  const billItemId = nextId(BILL_ITEM_ID_PREFIX)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      [ITEM_NAME]: '',
      [ITEM_PRICE]: '',
    },
    onSubmit: (submittedValues) => {
      dispatch(addBillItem({
        name: submittedValues[ITEM_NAME],
        id: billItemId,
        personId: '',
        price: parseFloat(submittedValues[ITEM_PRICE]),
      }))
      setTouched(false)
      formik.handleReset(true)
    },
    validationSchema: billItemSchema,
    validateOnChange: touched,
  })
  const { handleSubmit, handleChange, values, errors } = formik

  return (
    <form id="billItemForm" onSubmit={handleSubmit}>
      <Box
        margin={{top: 'medium'}}
        direction="row"
        gap="small"
        align="center"
      >
        <FormField label="Name" error={errors[ITEM_NAME]}>
          <TextInput
            placeholder="name"
            id={ITEM_NAME}
            name={ITEM_NAME}
            type="text"
            onChange={handleChange}
            value={values[ITEM_NAME]}
          />
          </FormField>
          <FormField label="Price" error={errors[ITEM_PRICE]}>
          <TextInput
            icon={<Text>£</Text>}
            placeholder="0.00"
            id={ITEM_PRICE}
            name={ITEM_PRICE}
            type="number"
            onChange={handleChange}
            value={values[ITEM_PRICE]}
          />
        </FormField>
        <Button type="submit" icon={<Add />} onClick={() => setTouched(true)} primary />
      </Box>
    </form>
  )
}
