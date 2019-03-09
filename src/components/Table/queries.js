import gql from 'graphql-tag'

export const UP_PLACE = gql`
  mutation($id: ID!, $attribute: String!, $facultyId: ID!) {
    upPlace(id: $id, attribute: $attribute, facultyId: $facultyId) {
      id
      name
      total
      budget
      selfFinancing
    }
  }
`

export const DOWN_PLACE = gql`
  mutation($id: ID!, $attribute: String!, $facultyId: ID!) {
    downPlace(id: $id, attribute: $attribute, facultyId: $facultyId) {
      id
      name
      total
      budget
      selfFinancing
    }
  }
`
