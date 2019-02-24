import gql from 'graphql-tag'

export const GET_STATS = gql`
  query {
    faculties {
      edges {
        name
        departments {
          id
          name
          total
          budget
          selfFinancing
        }
      }
    }
  }
`
