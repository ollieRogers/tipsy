import * as React from 'react'
import styled from 'styled-components'

export interface TextProps extends React.InputHTMLAttributes<HTMLDivElement> {
  name: string
  value: string | number
  onChange?: (e?: React.SyntheticEvent) => void
  label?: string
  disabled?: boolean
  error?: string | boolean
}

const StyledTextWrapper = styled.div`
  background-color: red;
`

export const Text = (props: TextProps) => {
  const {
    name,
    value,
    onChange,
    label,
    disabled,
    error,
    ...htmlProps
  } = props
  return (
    <StyledTextWrapper>
      <input
        {...{
          name,
          value,
          onChange,
          disabled,
          ...htmlProps,
        }}
      />

    </StyledTextWrapper>
  )
}
