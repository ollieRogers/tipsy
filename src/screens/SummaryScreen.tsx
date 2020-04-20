
import * as React from 'react'
import {Box, Heading} from 'grommet'
import { BillSummary } from '../components/bill/BillSummary'
import { Link } from 'react-router-dom'


export const SummaryScreen = () => {
  return (
    <Box
      animation="fadeIn"
    >
      <Heading alignSelf="center">Pay up!</Heading>
      <Link to="/service">TIP </Link>
      <BillSummary />
    </Box>
  )
}

