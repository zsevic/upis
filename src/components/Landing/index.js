import React, { Fragment } from 'react'
import { Jumbotron, Spinner } from 'reactstrap'
import { Query } from 'react-apollo'

import withSession from '../Session/withSession'

import FacultyList from '../FacultyList'
import * as queries from './queries'

const Landing = () => (
  <div>
    <Jumbotron>
      <Query query={queries.GET_STATS}>
        {({ data, loading, subscribeToMore }) => {
          const { faculties } = data

          if (loading || !faculties) {
            return (
              <div>
                <Spinner color="primary" />
              </div>
            )
          }

          const { edges } = faculties

          return (
            <Fragment>
              <FacultyList
                faculties={edges}
                subscribeToMore={subscribeToMore}
              />
            </Fragment>
          )
        }}
      </Query>
    </Jumbotron>
  </div>
)

export default withSession(Landing)
