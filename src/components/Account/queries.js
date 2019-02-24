import gql from 'graphql-tag'

export const GET_STATS = gql`
  query($id: ID!) {
    faculty(id: $id) {
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
`
