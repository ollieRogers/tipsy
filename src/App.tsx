import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { AppRouter } from './AppRouter'
import { Layout } from './components/layout'
import { store } from './store/createStore'

const App = () => (
  /**
   * TODO:
   * - Add an individual person breakdown
   */
  <Provider store={store}>
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  </Provider>
)


export default App
