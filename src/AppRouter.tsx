import React from 'react'

import { Route, Switch, useHistory } from 'react-router-dom'

import { Box, Heading, Button } from 'grommet'
import { UserAdd, Atm } from 'grommet-icons'
import { BillScreen,PeopleScreen, SummaryScreen, ServiceChargeScreen } from './screens'

export const AppRouter = () => {
  // TODO: Abstract below to screens
  const history = useHistory()
  const handleClick = (path: string) => () => history.push(path)

  return (
    <Switch>
      <Route path="/people" >
        <PeopleScreen/>
      </Route>

      <Route path="/bill" >
        <BillScreen/>
      </Route>

      <Route path="/summary" >
        <SummaryScreen/>
      </Route>

      <Route path="/service">
        <ServiceChargeScreen/>
      </Route>

      <Route path="/">
        <Heading alignSelf="center">Welcome</Heading>
        <Box gap="medium">
          <Button
            size="large"
            plain={false}
            onClick={handleClick('/people')}
            label="Add a person"
            icon={<UserAdd />}
          />
          <Button
            size="large"
            plain={false}
            onClick={handleClick('/bill')}
            label="Add a bill"
            icon={<Atm />}
          />
        </Box>
      </Route>
    </Switch>
  )
}
