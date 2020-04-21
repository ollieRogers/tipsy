import { useFormik } from 'formik'
import * as React from 'react'
import nextId from 'react-id-generator'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'

import { Box, Button, FormField, TextInput } from 'grommet'
import { Add } from 'grommet-icons'
import { PERSON_NAME } from '../../constants/fieldNames'
import { PERSON_ID_PREFIX } from '../../constants/idPrefix'
import { addPerson } from '../../store/people/actions'

const nameSchema = Yup.object().shape({
  [PERSON_NAME]: Yup.string()
    .min(2, 'too short')
    .max(50, 'too long')
    .required('enter a name'),
})

export const AddPeopleForm = () => {
  const [touched, setTouched] = React.useState(false)
  const personId = nextId(PERSON_ID_PREFIX)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      [PERSON_NAME]: '',
    },
    onSubmit: (submittedValues) => {
      dispatch(addPerson({
        name: submittedValues[PERSON_NAME],
        id: personId,
      }))
      setTouched(false)
      formik.handleReset(true)
    },
    validationSchema: nameSchema,
    validateOnChange: touched,
  })

  const { handleSubmit, handleChange, values, errors } = formik

  return (
    <form id="addPeopleForm" onSubmit={handleSubmit}>
      <Box
        margin={{top: 'medium'}}
        direction="row"
        gap="small"
        align="center"
      >
        <FormField label="Name" error={errors[PERSON_NAME]}>
          <TextInput
            placeholder="E.g. Sarah"
            id={PERSON_NAME}
            name={PERSON_NAME}
            type="text"
            onChange={handleChange}
            value={values[PERSON_NAME]}
          />
        </FormField>
        <Button type="submit" icon={<Add />} onClick={() => setTouched(true)} primary />
      </Box>
    </form>
  )
}
