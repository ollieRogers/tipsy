import { ADD_PERSON, DELETE_PERSON } from './types'
import { Person } from '../../types'

export interface AddPerson {
  type: ADD_PERSON
  payload: Person
}

export interface DeletePerson {
  type: DELETE_PERSON
  payload: Person
}

export type PersonAction = AddPerson | DeletePerson

export const addPerson = (person: Person): AddPerson => {
  return {
    type: ADD_PERSON,
    payload: person
  }
}

export const deletePerson = (person: Person): DeletePerson => {
  return {
    type: DELETE_PERSON,
    payload: person
  }
}
