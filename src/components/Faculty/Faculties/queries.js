import gql from 'graphql-tag'

export const GET_PAGINATED_FACULTIES_WITH_DEPARTMENTS = gql`
  query($cursor: String, $limit: Int!) {
    faculties(cursor: $cursor, limit: $limit) {
      edges {
        id
        name
        counter
        createdAt
        departments {
          id
          name
          total
          budget
          selfFinancing
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`
