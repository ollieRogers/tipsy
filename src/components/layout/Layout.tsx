import React from 'react'
import { Box, Grommet, Grid, Button } from 'grommet'
import { Navigation } from '../navigation'
import { useHistory } from 'react-router-dom'

interface GridProps {
  children: JSX.Element
}

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
    <Grommet theme={theme} full>
      <Grid fill rows={['auto', 'flex', 'auto']}>
        <Box align="center" tag="header" background="brand" pad="medium">
          <Button onClick={handleClick('/')}>Tipsy</Button>
        </Box>

        <Box background="light-1" pad="medium">
          {children}
        </Box>

        <Box tag="footer">
          <Navigation />
        </Box>
      </Grid>
    </Grommet>

  )
}
