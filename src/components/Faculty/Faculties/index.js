import React, { Fragment } from 'react'
import { Jumbotron, Spinner, Button } from 'reactstrap'
import { Query } from 'react-apollo'

import FacultyList from './FacultyList'
import * as queries from './queries'

const Faculties = ({ limit }) => (
  <div>
    <Jumbotron>
      <Query
        query={queries.GET_PAGINATED_FACULTIES_WITH_DEPARTMENTS}
        variables={{ limit }}
      >
        {({ data, loading, error, fetchMore, subscribeToMore }) => {
          if (!data) {
            return <div>Network error...</div>
          }

          const { faculties } = data

          if (loading || !faculties) {
            return (
              <div>
                <Spinner color="primary" />
              </div>
            )
          }

          const { edges, pageInfo } = faculties

          return (
            <Fragment>
              <FacultyList
                faculties={edges}
                subscribeToMore={subscribeToMore}
              />

              {pageInfo.hasNextPage && (
                <MoreFacultiesButton
                  limit={limit}
                  pageInfo={pageInfo}
                  fetchMore={fetchMore}
                >
                  More
                </MoreFacultiesButton>
              )}
            </Fragment>
          )
        }}
      </Query>
    </Jumbotron>
  </div>
)

const MoreFacultiesButton = ({
  limit,
  pageInfo,
  fetchMore,
  children,
}) => (
  <Button
    color="secondary"
    onClick={() =>
      fetchMore({
        variables: { cursor: pageInfo.endCursor, limit },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }

          return {
            faculties: {
              ...fetchMoreResult.faculties,
              edges: [
                ...previousResult.faculties.edges,
                ...fetchMoreResult.faculties.edges,
              ],
            },
          }
        },
      })
    }
  >
    {children}
  </Button>
)

export default Faculties
