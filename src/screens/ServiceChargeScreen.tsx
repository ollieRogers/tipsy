import { Box, Heading } from 'grommet'
import * as React from 'react'
import { ServiceChargeForm } from '../components/bill/ServiceChargeForm'

export const ServiceChargeScreen = () => {
  return (
    <Box
      animation="fadeIn"
    >
      <Heading alignSelf="center">
        Add a tip
      </Heading>
      <ServiceChargeForm/>
    </Box>
  )
}
