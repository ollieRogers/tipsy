
import { Box, Button, Heading } from 'grommet'
import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { BillSummary } from '../components/bill/BillSummary'
import PersonalBreakdown from '../components/bill/PersonalBreakdown'

export const SummaryScreen = () => {
  const history = useHistory()
  return (
    <Box animation="fadeIn">
      <Heading alignSelf="center">Pay up!</Heading>
      <BillSummary />
      <Box pad={{top: 'medium'}}>
        <Button size="medium" plain={false} onClick={() => history.push('/service')}>Change tip %</Button>
      </Box>
      <PersonalBreakdown />
    </Box >
  )
}
