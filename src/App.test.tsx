import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Root from './App'
import { initialState } from './store/initialState'

it('renders without crashing', () => {
  const mockStore = configureStore()
  const store = mockStore(initialState)
  const div = document.createElement('div')

  ReactDOM.render(<Provider store={store}><Root store={mockStore as any} /></Provider>, div)
})

