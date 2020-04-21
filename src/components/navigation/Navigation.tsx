import { Box, Button } from 'grommet'
import { Atm, Calculator, UserAdd } from 'grommet-icons'
import * as React from 'react'
import { useHistory } from 'react-router-dom'

export const Navigation = () => {
  const history = useHistory()
  const handleClick = (path: string) => () => history.push(path)

  return (
    <Box
      direction="row"
      align="center"
      justify="center"
      gap="medium"
      pad="medium"
      width="xxlarge"
      background="light-1"
    >
      <Button
        icon={<UserAdd color="brand" />}
        onClick={handleClick('/people')}
        title="add people"
      />
      <Button
        icon={<Atm color="brand" />}
        onClick={handleClick('/bill')}
        title="add bill items"
      />
      <Button
        size="large"
        icon={<Calculator />}
        onClick={handleClick('/summary')}
        plain={false}
        label="pay"
        primary
      />
    </Box>
  )
}
