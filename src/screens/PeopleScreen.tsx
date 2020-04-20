import * as React from 'react'
import { Box, Heading } from 'grommet'

import { PeopleList } from '../components/people/PeopleList'
import { AddPeopleForm } from '../components/people/AddPeopleForm'

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
