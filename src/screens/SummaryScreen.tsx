
import * as React from 'react'
import { Box, Heading, Button } from 'grommet'
import { BillSummary } from '../components/bill/BillSummary'
import PersonalBreakdown from '../components/bill/PersonalBreakdown'
import { useHistory } from 'react-router-dom'

export const SummaryScreen = () => {
  const history = useHistory()
  return (
    <Box animation="fadeIn">
      <Heading alignSelf="center">Pay up!</Heading>
      <BillSummary />
      <Box pad={{top:'medium'}}>
        <Button size="medium" plain={false} onClick={() => history.push('/service')}>Change tip %</Button>
      </Box>
      <PersonalBreakdown />
    </Box >
  )
}

