import React, { Fragment } from 'react'
import { Spinner } from 'reactstrap'
import { Query } from 'react-apollo'

import Table from './Table'
import * as queries from './queries'

import withAuthorization from '../Session/withAuthorization'

const Account = ({ session }) => (
  <div>
    <Query
      query={queries.GET_FACULTY}
      variables={{ id: session.me.faculty.id }}
    >
      {({ data, loading }) => {
        const { faculty } = data

        if (loading || !faculty) {
          return (
            <div>
              <Spinner color="primary" />
            </div>
          )
        }

        return (
          <Fragment>
            <Table
              key={faculty.id}
              session={session}
              faculty={faculty}
            />
          </Fragment>
        )
      }}
    </Query>
  </div>
)

export default withAuthorization(
  session => session.me && session.me.role === 'ADMIN',
)(Account)
