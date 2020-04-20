import { addPerson, deletePerson } from './actions'
import { ADD_PERSON, DELETE_PERSON } from './types'

describe('people actions', () => {
  const person = {
    name: 'Ollie',
    id: 'person-id-25',
  }
  it('should create an action to add a person', () => {
    const expectedAction = {
      type: ADD_PERSON,
      payload: person
    }
    expect(addPerson(person)).toEqual(expectedAction)
  })
  it('should create an action to delete a person', () => {
    const expectedAction = {
      type: DELETE_PERSON,
      payload: person
    }
    expect(deletePerson(person)).toEqual(expectedAction)
  })
})
