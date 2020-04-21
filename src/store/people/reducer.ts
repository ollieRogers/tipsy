import { PersonAction } from './actions'
import { Person, StateShape } from '../../types'
import { ADD_PERSON, DELETE_PERSON } from './types'
import update from 'immutability-helper'
import { initialState } from '../initialState'
import { memoize } from 'lodash'
import { createSelector } from 'reselect'

export const peopleReducer = (state: Person[] = initialState.people, action: PersonAction): Person[] => {
  const { type, payload } = action

  switch (type) {
    case ADD_PERSON:
      return update(state, { $push: [payload] })
    case DELETE_PERSON:
      const removeIndex = state.indexOf(payload)
      return update(state, { $splice: [[removeIndex, 1]] })
    default:
      return state
  }
}

export const peopleSelector = (state: StateShape) => state.people

export const personByIdSelector = createSelector(
  peopleSelector,
  (people) => memoize(
    (personId: string) => {
      return people.filter(person => person.id === personId)
    }
  )
)
