import React from 'react'
import { useDispatch } from 'react-redux'

import { Person } from '../../types'
import { deletePerson } from '../../store/people/actions'
import { Button } from 'grommet'
import { Trash } from 'grommet-icons'

interface DeletePersonButtonProps {
  person: Person
}

const DeletePersonButton = (props: DeletePersonButtonProps) => {
  const { person } = props
  const dispatch = useDispatch()

  return (
    <Button
      primary={false}
      icon={<Trash />}
      onClick={() => dispatch(deletePerson(person))}
    />
  )
}

export default DeletePersonButton
