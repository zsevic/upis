import gql from 'graphql-tag'

export const FACULTY_UPDATED = gql`
  subscription {
    facultyUpdated {
      faculty {
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
    }
  }
`
