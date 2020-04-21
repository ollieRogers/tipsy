import { addBillItem, deleteBillItem, updateServiceCharge } from './actions'
import { ADD_BILL_ITEM, DELETE_BILL_ITEM, UPDATE_SERVICE_CHARGE } from './types'

describe('bill actions', () => {
  const billItem = {
    name: 'pizza',
    id: 'bill-item-id-25',
    price: 13.99,
    personId: '',
  }

  it('should create an action to add a bill item', () => {
    const expectedAction = {
      type: ADD_BILL_ITEM,
      payload: billItem,
    }
    expect(addBillItem(billItem)).toEqual(expectedAction)
  })

  it('should create an action to delete a bill item', () => {
    const expectedAction = {
      type: DELETE_BILL_ITEM,
      payload: billItem,
    }
    expect(deleteBillItem(billItem)).toEqual(expectedAction)
  })

  it('should create an action to update service charge', () => {
    const expectedAction = {
      type: UPDATE_SERVICE_CHARGE,
      payload: 10,
    }
    expect(updateServiceCharge(10)).toEqual(expectedAction)
  })

})
