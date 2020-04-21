import { Box, Text } from 'grommet'
import * as React from 'react'
import { BillItem } from '../../types'
import { formatCurrency } from '../../util/formatCurrency'
import DeleteBillItemButton from './DeleteBillItemButton'
import { PersonSelect } from './PersonSelect'

interface ItemListProps {
  items: BillItem[]
}

export const BillItemList = (props: ItemListProps) => {
  const { items } = props
  const hasBillItems = items.length > 0

  if (!hasBillItems) { return (<div>no Items</div>) }

  return (
    <>
      {items.map((billItem: BillItem) => (
        <Box
          animation={{
            'type': 'slideRight',
            'delay': 0,
            'duration': 500,
            'size': 'xsmall',
          }}
          key={billItem.id}
          pad="medium"
          border="bottom"
          justify="between"
          direction="row"
          align="center"
        >
          <Text>{billItem.name} - £{formatCurrency(billItem.price)}</Text>
          <PersonSelect {...{ billItem }} />
          <DeleteBillItemButton item={billItem} />
        </Box>
      ))}
    </>
  )
}
