import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { DropdownItem } from 'reactstrap'

import * as routes from '../../constants/routes'
import history from '../../constants/history'

const SignOutButton = () => (
  <ApolloConsumer>
    {client => (
      <DropdownItem onClick={() => signOut(client)}>
        Sign Out
      </DropdownItem>
    )}
  </ApolloConsumer>
)

const signOut = client => {
  localStorage.removeItem('token')
  client.resetStore()
  history.push(routes.SIGN_IN)
}

export { signOut }

export default SignOutButton
