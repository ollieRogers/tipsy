import { combineReducers } from 'redux'
import { peopleReducer } from './people/reducer'
import { billReducer, serviceChargeReducer } from './bill/reducer'

export const reducer = combineReducers({
  people: peopleReducer,
  bill: billReducer,
  serviceCharge: serviceChargeReducer,
})
