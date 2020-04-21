import * as React from 'react'
import { useSelector } from 'react-redux'
import { peopleSelector } from '../../store/people/reducer'
import { Box, Text } from 'grommet'
import { Person } from '../../types'
import { billBreakDownByPersonSelector, serviceChargePercSelector } from '../../store/bill/reducer'
import { formatCurrency } from '../../util/formatCurrency'

const PersonalBreakdown = () => {
  const people = useSelector(peopleSelector)
  const billBreakdownFilter = useSelector(billBreakDownByPersonSelector)
  const serviceCharge = useSelector(serviceChargePercSelector)
  if (!people) return <></>

  return (
    <Box margin={{top:'large'}}>
      <Text size="large">Breakdown</Text>
      {people.map((person: Person) => {
        const { total, tip } = billBreakdownFilter(person.id)
        return (
          <Box key={person.id} pad="medium" elevation="small" round margin={{bottom:'large'}}>
            <Text color="brand" weight="bold">{person.name}</Text>
            <Text>Items £{formatCurrency(total)}</Text>
            <Text>{serviceCharge}% tip £{formatCurrency(tip)}</Text>
            <Box margin={{top:'small'}} pad={{top:'small'}} border="top">
              <Text weight="bold">{person.name} owes £{formatCurrency(tip+total)}</Text>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default PersonalBreakdown
