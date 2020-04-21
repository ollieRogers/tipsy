import { peopleReducer, peopleSelector, personByIdSelector } from './reducer'
import { ADD_PERSON, DELETE_PERSON } from './types'
import { StateShape } from '../../types/index'
import { PersonAction } from './actions'


const person1 = {
  name: 'Ollie',
  id: 'person-id-25',
}

const person2 = {
  name: 'Ellie',
  id: 'person-id-24',
}

describe('people reducer', () => {
  it('should return initial state', () => {
    expect(peopleReducer(undefined, {} as PersonAction))
      .toEqual([])
  })

  it(`should handle action "${ADD_PERSON}"`, () => {
    expect(
      peopleReducer([], {
        type: ADD_PERSON,
        payload: person1
      })
    ).toEqual(
      [person1]
    )
    expect(
      peopleReducer([person1], {
        type: ADD_PERSON,
        payload: person2,
      })
    ).toEqual([person1, person2])
  })

  it(`should handle action "${DELETE_PERSON}"`, () => {
    expect(
      peopleReducer([person1, person2], {
        type: DELETE_PERSON,
        payload: person2,
      })
    ).toEqual([person1])

    expect(
      peopleReducer([person1, person2], {
        type: DELETE_PERSON,
        payload: person1,
      })
    ).toEqual([person2])

    expect(
      peopleReducer([person1], {
        type: DELETE_PERSON,
        payload: person1,
      })
    ).toEqual([])
  })

  describe('peopleSelector', () => {
    it('returns bill items', () => {
      expect(
        peopleSelector({
          people: [person1, person2]
        } as StateShape)
      ).toEqual([person1, person2])

      expect(
        peopleSelector({
          people: [person1]
        } as StateShape)
      ).toEqual([person1])
    })
  })

  describe('peopleByIdSelector', () => {
    const personFilter = personByIdSelector({people: [person1, person2]} as StateShape)
    it('returns person by id', () => {
      expect(personFilter('person-id-24')).toEqual([person2])
    })
  })

})
