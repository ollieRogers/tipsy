import { Box, Button, Grid, Grommet } from 'grommet'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Navigation } from '../navigation'

interface GridProps {
  children: JSX.Element
}

const StyledFooter = styled(Box)`
  position: fixed;
  bottom: 0;
`
// https://github.com/grommet/grommet/wiki/Grommet-v2-theming-documentation
const theme = {
  global: {
    colors: {
      brand: '#2c003e',
      focus: '#fe346e',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

export const Layout = (props: GridProps) => {
  const { children } = props
  const history = useHistory()
  const handleClick = (path: string) => () => history.push(path)
  return (
    <Grommet theme={theme}>
      <Grid fill rows={['auto', 'flex', 'auto']}>
        <Box align="center" tag="header" background="brand" pad="medium">
          <Button onClick={handleClick('/')}>Tipsy</Button>
        </Box>

        <Box height="100%" pad="medium" >
          {children}
        </Box>

        <StyledFooter tag="footer">
          <Navigation />
        </StyledFooter>
      </Grid>

    </Grommet>

  )
}
