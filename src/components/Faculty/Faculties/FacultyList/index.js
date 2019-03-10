import React, { Component } from 'react'
import _ from 'lodash'

import Table from './Table'
import * as queries from './queries'

export default class FacultyList extends Component {
  subscribeToMore = () => {
    this.props.subscribeToMore({
      document: queries.FACULTY_UPDATED,
      updateQuery: (previousResult, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previousResult
        }

        const { facultyUpdated } = subscriptionData.data

        return {
          ...previousResult,
          faculties: {
            ...previousResult.faculties,
            edges: [
              facultyUpdated.faculty,
              ...previousResult.faculties.edges,
            ],
          },
        }
      },
    })
  }

  componentDidMount() {
    this.subscribeToMore()
  }

  render() {
    const { faculties } = this.props

    let uniqueFaculties = _.uniqBy(faculties, 'id')

    return uniqueFaculties.map(faculty => (
      <Table key={faculty.id} faculty={faculty} />
    ))
  }
}
