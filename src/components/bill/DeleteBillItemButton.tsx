import * as React from 'react'
import { BillItem } from '../../types'
import { useDispatch } from 'react-redux'
import { deleteBillItem } from '../../store/bill/actions'
import {Button} from 'grommet'
import {Trash} from 'grommet-icons'

interface DeleteBillItemButtonProps {
  item: BillItem
}

const DeleteBillItemButton = (props: DeleteBillItemButtonProps) => {
  const { item } = props
  const dispatch = useDispatch()

  return (
    <Button
      primary={false}
      icon={<Trash />}
      onClick={() => dispatch(deleteBillItem(item))}
    />
  )
}

export default DeleteBillItemButton
