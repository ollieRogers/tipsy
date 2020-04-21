import { Box, Heading, Text } from 'grommet'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { AddBillItemForm } from '../components/bill/AddBillItemForm'
import { BillItemList } from '../components/bill/ItemList'
import { billItemsSelector } from '../store/bill/reducer'
import { billSubtotalSelector } from '../store/bill/reducer'
import { formatCurrency } from '../util/formatCurrency'

export const BillScreen = () => {
  const items = useSelector(billItemsSelector)
  const billItemsTotal = useSelector(billSubtotalSelector)
  return (
    <Box animation="fadeIn">
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
