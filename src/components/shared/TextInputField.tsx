import {FormField, TextInput} from 'grommet'
import * as React from 'react'

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
