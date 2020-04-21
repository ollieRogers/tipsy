import { ServiceChargeAction } from './actions'
import { Bill, StateShape, ServiceCharge } from '../../types'
import { ADD_BILL_ITEM, DELETE_BILL_ITEM, UPDATE_SERVICE_CHARGE, BILL_ITEM_UPDATE_PERSON_ID } from './types'
import update from 'immutability-helper'
import { initialState } from '../initialState'
import { createSelector } from 'reselect'
import { memoize } from 'lodash'

export const billReducer = (state: Bill = initialState.bill, action: any): Bill => {
  const { type, payload } = action

  switch (type) {
    case ADD_BILL_ITEM:
      return update(state, { items: { $push: [payload] } })

    case DELETE_BILL_ITEM:
      const removeIndex = state.items.indexOf(payload)
      return update(state, { items: { $splice: [[removeIndex, 1]] } })

    case BILL_ITEM_UPDATE_PERSON_ID:
      const [updateItem] = state.items.filter(item => item.id === payload.itemId)
      const itemClone = ({ ...updateItem })
      const updateIndex = state.items.indexOf(updateItem)
      itemClone.personId = payload.personId

      return update(state, { items: { [updateIndex]: { $set: itemClone } } })
    default:
      return state
  }
}

export const billItemsSelector = (state: StateShape) => state.bill.items

export const billSubtotalSelector = createSelector(
  billItemsSelector,
  items => items.reduce((acc, item) => acc + item.price, 0)
)

export const serviceChargeReducer = (state: ServiceCharge = initialState.serviceCharge, action: ServiceChargeAction): ServiceCharge => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_SERVICE_CHARGE:
      return update(state, { $set: payload })
    default:
      return state
  }
}

export const serviceChargePercSelector = (state: StateShape) => state.serviceCharge

export const serviceChargeValueSelector = createSelector(
  serviceChargePercSelector,
  billSubtotalSelector,
  (serviceChargePerc, billTotal) => (billTotal * (serviceChargePerc / 100)) || 0
)

export const billBreakDownByPersonSelector = createSelector(
  billItemsSelector,
  serviceChargePercSelector,
  (items, serviceChargePerc) => memoize(
    (personId: string) => {
      const sumItems = items.filter(item => item.personId === personId)
      const total = sumItems.reduce((acc, item) => acc + item.price, 0)
      const tip = (total * (serviceChargePerc / 100)) || 0
      return {
        total,
        tip,
      }
    }
  )
)
