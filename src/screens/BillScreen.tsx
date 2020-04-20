import * as React from 'react'
import { useSelector } from 'react-redux'
import { BillItemList } from '../components/bill/ItemList'
import { AddBillItemForm } from '../components/bill/AddBillItemForm'
import { billItemsSelector } from '../store/bill/reducer'
import { Box, Heading, Text } from 'grommet'
import { billSubtotalSelector } from '../store/bill/reducer'
import { formatCurrency } from '../util/formatCurrency'

export const BillScreen = () => {
  const items = useSelector(billItemsSelector)
  const billItemsTotal = useSelector(billSubtotalSelector)

  return (
    <Box
      animation="fadeIn"
    >
      <Heading alignSelf="center">
        Bill
        <Text>
          (£{formatCurrency(billItemsTotal)})
        </Text>
      </Heading>
      <BillItemList items={items} />
      <AddBillItemForm />
    </Box>
  )
}
