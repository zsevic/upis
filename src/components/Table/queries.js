import gql from 'graphql-tag'

export const UP_PLACE = gql`
  mutation($id: ID!, $attribute: String!) {
    upPlace(id: $id, attribute: $attribute) {
      id
      name
      total
      budget
      selfFinancing
    }
  }
`

export const DOWN_PLACE = gql`
  mutation($id: ID!, $attribute: String!) {
    downPlace(id: $id, attribute: $attribute) {
      id
      name
      total
      budget
      selfFinancing
    }
  }
`
