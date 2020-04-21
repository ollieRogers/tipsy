import { StateShape } from '../../types'
import { BillAction, ServiceChargeAction } from './actions'
import {
  billBreakDownByPersonSelector,
  billItemsSelector,
  billReducer,
  billSubtotalSelector,
  serviceChargePercSelector,
  serviceChargeReducer,
  serviceChargeValueSelector,
} from './reducer'
import {
  ADD_BILL_ITEM,
  DELETE_BILL_ITEM,
  UPDATE_SERVICE_CHARGE,
} from './types'

const billItem1 = {
  name: 'pizza',
  id: 'bill-item-id-25',
  price: 13.99,
  personId: '',
}
const billItem2 = {
  name: 'noodles',
  id: 'bill-item-id-26',
  price: 14.99,
  personId: '',
}

describe('bill reducer', () => {
  it('should return initial state', () => {
    expect(billReducer(undefined, {} as BillAction))
      .toEqual({
        items: [],
      })
  })

  it(`should handle action "${ADD_BILL_ITEM}"`, () => {
    expect(billReducer({
      items: [],
    }, {
      type: ADD_BILL_ITEM,
      payload: billItem1,
    })).toEqual({
      items: [billItem1],
    })

    expect(billReducer({
      items: [billItem1],
    }, {
      type: ADD_BILL_ITEM,
      payload: billItem2,
    })).toEqual({
      items: [billItem1, billItem2],
    })
  })

  it(`should handle action "${DELETE_BILL_ITEM}"`, () => {
    expect(billReducer({
      items: [billItem1],
    }, {
      type: DELETE_BILL_ITEM,
      payload: billItem1,
    })).toEqual({
      items: [],
    })

    expect(billReducer({
      items: [billItem1, billItem2],
    }, {
      type: DELETE_BILL_ITEM,
      payload: billItem2,
    })).toEqual({
      items: [billItem1],
    })

    expect(billReducer({
      items: [billItem1, billItem2],
    }, {
      type: DELETE_BILL_ITEM,
      payload: billItem1,
    })).toEqual({
      items: [billItem2],
    })
  })
})

describe('serviceCharge reducer', () => {
  it('should return initial state', () => {
    expect(serviceChargeReducer(undefined, {} as ServiceChargeAction))
      .toEqual(10)
  })
  it(`should handle action ${UPDATE_SERVICE_CHARGE}`, () => {
    expect(serviceChargeReducer(0, {
      type: UPDATE_SERVICE_CHARGE,
      payload: 22,
    }))
      .toEqual(22)
  })
})

describe('billItemsSelector', () => {
  it('returns bill items', () => {
    expect(
      billItemsSelector({
        bill: {
          items: [billItem1, billItem2],
        },
      } as StateShape),
    ).toEqual([billItem1, billItem2])

    expect(
      billItemsSelector({
        bill: {
          items: [billItem1],
        },
      } as StateShape),
    ).toEqual([billItem1])
  })
})

describe('serviceChargePercSelector', () => {
  it('returns service charge %', () => {
    expect(
      serviceChargePercSelector({
        serviceCharge: 10,
      } as StateShape),
    ).toEqual(10)

    expect(
      serviceChargePercSelector({
        serviceCharge: 0,
      } as StateShape),
    ).toEqual(0)
  })
})

describe('billSubtotalSelector', () => {
  it('correctly sums the price of bill items', () => {
    expect(
      billSubtotalSelector({
        bill: {
          items: [billItem1, billItem2],
        },
      } as StateShape),
    ).toEqual(billItem1.price + billItem2.price)
  })
})

describe('serviceChargeValueSelector', () => {
  it('correctly calculates the service charge', () => {
    expect(
      serviceChargeValueSelector({
        bill: {
          items: [billItem1, billItem2],
        },
        serviceCharge: 10,
      } as StateShape),
    ).toEqual(2.898)

    expect(
      serviceChargeValueSelector({
        bill: {
          items: [billItem1, billItem2],
        },
        serviceCharge: 0,
      } as StateShape),
    ).toEqual(0)

    expect(
      serviceChargeValueSelector({
        bill: {
          items: [billItem1, billItem2],
        },
        serviceCharge: 20,
      } as StateShape),
    ).toEqual(5.796)

    expect(
      serviceChargeValueSelector({
        bill: {
          items: [billItem1],
        },
        serviceCharge: 20,
      } as StateShape),
    ).toEqual(2.798)

  })
})

describe('billBreakDownByPersonSelector', () => {
  const assignedBillItem1 = {
    name: 'pizza',
    id: 'bill-item-id-25',
    price: 10,
    personId: 'person-id-1',
  }
  const assignedBillItem2 = {
    name: 'ice cream',
    id: 'bill-item-id-25',
    price: 10,
    personId: 'person-id-1',
  }
  const assignedBillItem3 = {
    name: 'burger',
    id: 'bill-item-id-25',
    price: 10,
    personId: 'person-id-2',
  }

  const billBreakdownFilter = billBreakDownByPersonSelector({
    bill: { items: [{}] }, serviceCharge: 10,
  } as StateShape)
  const billBreakdownFilter1 = billBreakDownByPersonSelector({
    bill: { items: [billItem1, billItem2] }, serviceCharge: 10,
  } as StateShape)
  const billBreakdownFilter2 = billBreakDownByPersonSelector({
    bill: { items: [assignedBillItem1, billItem2] }, serviceCharge: 10,
  } as StateShape)
  const billBreakdownFilter3 = billBreakDownByPersonSelector({
    bill: { items: [assignedBillItem1, assignedBillItem2, assignedBillItem3] }, serviceCharge: 10,
  } as StateShape)

  it('returns empty when no items assigned', () => {
    expect(
      billBreakdownFilter(''),
    ).toEqual({ tip: 0, total: 0 })
  })

  it('correctly calculates the bill & tip per person', () => {
    expect(
      billBreakdownFilter1('person-id-1'),
    ).toEqual({ tip: 0, total: 0 })
    expect(
      billBreakdownFilter2('person-id-1'),
    ).toEqual({ tip: 1, total: 10 })
    expect(
      billBreakdownFilter3('person-id-1'),
    ).toEqual({ tip: 2, total: 20 })
    expect(
      billBreakdownFilter3('person-id-2'),
    ).toEqual({ tip: 1, total: 10 })
  })
})
