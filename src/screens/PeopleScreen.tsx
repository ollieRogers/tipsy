import { Box, Heading } from 'grommet'
import * as React from 'react'

import { AddPeopleForm } from '../components/people/AddPeopleForm'
import { PeopleList } from '../components/people/PeopleList'

export const PeopleScreen = () => {
  return (
    <Box
      animation="fadeIn"
    >
      <Heading alignSelf="center">
        People
      </Heading>
      <PeopleList />
      <AddPeopleForm />
    </Box>
  )
}
