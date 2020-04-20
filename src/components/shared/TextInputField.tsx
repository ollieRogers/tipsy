import * as React from 'react'
import {TextInput, FormField} from 'grommet'

interface TextInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  value: string | number
  onChange: ((eventOrTextValue: string | React.ChangeEvent<any>) => void)
  label?: string
  disabled?: boolean
  error?: string | boolean
}

export const TextInputField = (props: TextInputFieldProps) => {
  const {
    name,
    value,
    onChange,
    label,
    disabled,
    error,
  } = props

  return (
    <FormField label={label} error={error}>
      <TextInput
        {...{
          name,
          value,
          onChange,
          disabled,
        }}
      />
    </FormField>
  )
}
