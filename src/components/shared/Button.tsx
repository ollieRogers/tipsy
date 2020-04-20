import * as React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: ((eventOrTextValue: string | React.MouseEvent<any>) => void)
  children: JSX.Element | JSX.Element[] | string
}

const StyledButton = styled.button`
  appearance: none;
`

export const Button = (props: ButtonProps) => {
  const {onClick,  children, ...htmlButtonProps} = props
  return (
    <StyledButton onClick={onClick} type="button" {...htmlButtonProps}>
      {children}
    </StyledButton>
  )
}

