import gql from 'graphql-tag'

export const GET_FACULTY = gql`
  query($id: ID!) {
    faculty(id: $id) {
      id
      name
      counter
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

/* export const UP_PLACE = gql`
  mutation($id: ID!, $attribute: String!, $facultyId: ID!) {
    upPlace(id: $id, attribute: $attribute, facultyId: $facultyId) {
      id
      name
      total
      budget
      selfFinancing
    }
  }
` */

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

export const INCREMENT_COUNTER = gql`
  mutation($facultyId: ID!) {
    incrementCounter(facultyId: $facultyId) {
      id
      name
      counter
    }
  }
`
