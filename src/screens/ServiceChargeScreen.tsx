import * as React from 'react'
import { Box, Heading, Text } from 'grommet'
import { ServiceChargeForm } from '../components/bill/ServiceChargeForm'

export const ServiceChargeScreen = () => {
  return (
    <Box
      animation="fadeIn"
    >
      <Heading alignSelf="center">
        Add a tip
      </Heading>
      <Text>RAG buttons 0. 10%. 15%. 20%. with manual overide</Text>
      <ServiceChargeForm/>
    </Box>
  )
}
