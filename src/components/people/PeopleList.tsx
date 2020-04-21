import * as React from 'react'
import { useSelector } from 'react-redux'

import { Box } from 'grommet'
import { peopleSelector } from '../../store/people/reducer'
import { Person } from '../../types'
import DeletePersonButton from './DeletePersonButton'

const PeopleListItem = ({ person }: { person: Person }) => {
  return (
    <Box
      key={person.id}
      pad="small"
      border="bottom"
      justify="between"
      direction="row"
      align="center"
      animation={{
        'type': 'slideRight',
        'delay': 0,
        'duration': 500,
        'size': 'xsmall',
      }}
    >
      {person.name}
      <DeletePersonButton person={person} />
    </Box>
  )
}

export const PeopleList = () => {
  const people = useSelector(peopleSelector)
  const hasPeople = people.length > 0

  if (!hasPeople) { return (<div>Add someone</div>) }

  return (
    <>
      {people.map((person: Person) => <PeopleListItem key={person.id} {...{ person }} />)}
    </>
  )
}
