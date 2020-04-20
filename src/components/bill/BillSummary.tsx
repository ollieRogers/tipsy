import React from 'react'
import { useSelector } from 'react-redux'
import { billSubtotalSelector, serviceChargePercSelector, serviceChargeValueSelector } from '../../store/bill/reducer'
import { formatCurrency } from '../../util/formatCurrency'
import { Box, Text } from 'grommet'

export const BillSummary = () => {
  const billItemsTotal = useSelector(billSubtotalSelector)
  const serviceChargePerc = useSelector(serviceChargePercSelector)
  const serviceChargeValue = useSelector(serviceChargeValueSelector)
  const subtotal = billItemsTotal + serviceChargeValue

  return (
    <>
      <Box round="medium" elevation="large"  pad="medium">
        <Text size="medium" margin={{bottom:'xsmall'}}>
          Items: <Text weight="bold">£{formatCurrency(billItemsTotal)}</Text>
        </Text>

        <Text size="medium" margin={{bottom:'xsmall'}}>
          Tip @ <Text weight="normal">{serviceChargePerc}%</Text>:
          <Text weight="bold"> £{formatCurrency(serviceChargeValue)}</Text>
        </Text>

        <Text size="medium">
          Total (inc tip): <Text weight="bold">£{formatCurrency(subtotal)}</Text>
        </Text>
      </Box>
    </>
  )
}
