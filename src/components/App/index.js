import React from 'react'
import { Route, Router } from 'react-router-dom'

import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignInPage from '../SignIn'
import AccountPage from '../Account'
import withSession from '../Session/withSession'

import * as routes from '../../constants/routes'
import history from '../../constants/history'

const App = ({ session, refetch }) => (
  <Router history={history}>
    <div>
      <Navigation session={session} />

      <hr />

      <Route
        exact
        path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact
        path={routes.SIGN_IN}
        component={() => <SignInPage refetch={refetch} />}
      />
      <Route
        exact
        path={routes.ACCOUNT}
        component={() => <AccountPage session={session} />}
      />
    </div>
  </Router>
)

export default withSession(App)
