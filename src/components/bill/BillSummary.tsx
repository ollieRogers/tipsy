import { Box, Text } from 'grommet'
import React from 'react'
import { useSelector } from 'react-redux'
import { billSubtotalSelector, serviceChargePercSelector, serviceChargeValueSelector } from '../../store/bill/reducer'
import { formatCurrency } from '../../util/formatCurrency'

export const BillSummary = () => {
  const billItemsTotal = useSelector(billSubtotalSelector)
  const serviceChargePerc = useSelector(serviceChargePercSelector)
  const serviceChargeValue = useSelector(serviceChargeValueSelector)
  const subtotal = billItemsTotal + serviceChargeValue

  return (
    <>
      <Box round="medium" elevation="small"  pad="medium">
        <Text color="brand" weight="bold">Everything</Text>
        <Text size="medium" margin={{bottom: 'xsmall'}}>
          Items: <Text weight="bold">£{formatCurrency(billItemsTotal)}</Text>
        </Text>

        <Text size="medium" margin={{bottom: 'xsmall'}}>
          Tip @ <Text weight="normal">{serviceChargePerc}%</Text>:
          <Text weight="bold"> £{formatCurrency(serviceChargeValue)}</Text>
        </Text>
        <Box margin={{top: 'small'}} pad={{top: 'small'}} border="top">
          <Text color="brand" size="medium">
            Total (inc tip): <Text weight="bold">£{formatCurrency(subtotal)}</Text>
          </Text>
        </Box>
      </Box>
    </>
  )
}
