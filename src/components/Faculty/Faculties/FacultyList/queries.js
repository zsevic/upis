import gql from 'graphql-tag'

export const DEPARTMENT_UPDATED = gql`
  subscription {
    departmentUpdated {
      department {
        id
        name
        total
        budget
        selfFinancing
      }
    }
  }
`
