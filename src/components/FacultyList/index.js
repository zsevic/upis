import React, { Component } from 'react'
import Table from '../Landing/Table'

import * as queries from './queries'

export default class FacultyList extends Component {
  subscribeToMore = () => {
    this.props.subscribeToMore({
      document: queries.DEPARTMENT_UPDATED,
      updateQuery: (previousResult, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return previousResult
        }

        // const { departmentUpdated } = subscriptionData.data

        return previousResult
      },
    })
  }

  componentDidMount() {
    this.subscribeToMore()
  }

  render() {
    const { faculties } = this.props

    return faculties.map(faculty => (
      <Table key={faculty.id} faculty={faculty} />
    ))
  }
}
