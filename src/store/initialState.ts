import { StateShape } from '../types'

export const initialState: StateShape = {
  people: [
    {
      name: 'Ollie',
      id: 'person-id-25'
    },
    {
      name: 'Sarah',
      id: 'person-id-26'
    }
  ],
  bill: {
    items: [
      {
        name: 'pizza',
        id: 'bill-item-id-25',
        price: 14.99,
        personId: 'person-id-25'
      },
      {
        name: 'coffee',
        id: 'bill-item-id-26',
        price: 13.99,
        personId: ''
      }
    ]
  },
  serviceCharge: 10,
}
