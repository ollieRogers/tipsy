import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { peopleSelector, personByIdSelector } from '../../store/people/reducer'
import { Person, BillItem } from '../../types'
import { updatebillItemPersonId } from '../../store/bill/actions'
import { Button, Box, List, Layer } from 'grommet'
import { Add, Edit, UserAdd } from 'grommet-icons'
import { useHistory } from 'react-router-dom'

interface PersonSelectProps {
  billItem: BillItem
}

interface SelectBoxProps {
  people: Person[]
  onClose: any
  itemId: string
}


const SelectBox = (props: SelectBoxProps) => {
  const { people, onClose, itemId } = props
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
      <Box width="medium">
        <List
          pad="large"
          border="bottom"
          data={people}
          onClickItem={(event: any) => {
            onClose()
            dispatch(updatebillItemPersonId({
              itemId,
              personId: event.item.id,
            }))
          }}
        />
      </Box>
      <Box width="medium" pad="medium" >
        <Button
          onClick={()=>history.push('/people')}
          icon={<UserAdd/>}
          plain={undefined}
          size="medium"
          label="add new person"
        />

      </Box>
    </Layer>
  )
}


// TODO make this trigger a 'select person' modal

export const PersonSelect = (props: PersonSelectProps) => {
  const { billItem: { id, personId } } = props
  const [open, setOpen] = React.useState(false)
  const people = useSelector(peopleSelector)
  const personByIdFilter = useSelector(personByIdSelector)
  const [person] = personByIdFilter(personId)

  const onClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        size="medium"
        gap="xsmall"
        plain={undefined}
        icon={!!personId ? (<Edit size="small" />):(<Add size="small"/>)}
        label={!!personId ? person.name : 'assign'}
        color="light-1"
        onClick={()=>setOpen(!open)}
      />
      { open && (
        <SelectBox itemId={id} onClose={onClose} people={people} />
      )}
    </>
  )

}

