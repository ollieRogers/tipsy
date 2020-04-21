import { combineReducers } from 'redux'
import { billReducer, serviceChargeReducer } from './bill/reducer'
import { peopleReducer } from './people/reducer'

export const reducer = combineReducers({
  people: peopleReducer,
  bill: billReducer,
  serviceCharge: serviceChargeReducer,
})
