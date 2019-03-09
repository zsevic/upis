import React, { Component } from 'react'
import { Badge, Table } from 'reactstrap'
import { Mutation } from 'react-apollo'

import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons'

import * as queries from './queries'

export default class TableComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      departments: [...this.props.faculty.departments],
    }
  }

  upPlace = async (index, upPlaceMutation) => {
    const { data } = await upPlaceMutation()
    const { upPlace } = data

    const { departments } = this.state

    departments[index] = { ...upPlace }

    this.setState({ departments })
  }

  downPlace = async (index, key, downPlaceMutation) => {
    const { departments } = this.state
    if (departments[index][key] <= 0) return

    const { data } = await downPlaceMutation()
    const { downPlace } = data

    departments[index] = { ...downPlace }

    this.setState({ departments })
  }

  render() {
    return (
      <div>
        <Badge color="primary" pill>
          {this.props.faculty.name}
        </Badge>
        <Table responsive hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Department</th>
              <th>Total</th>
              <th>Budget</th>
              <th>Self-financing</th>
            </tr>
          </thead>
          <tbody>
            {this.props.faculty.departments.map(
              (department, index) => {
                return (
                  <tr key={department.id}>
                    <th scope="row">{index + 1}</th>
                    {Object.keys(department).map(key => {
                      switch (key) {
                        case 'name':
                        case 'total':
                          return (
                            <td
                              key={key}
                              className={`department${key[0].toUpperCase()}${key.slice(
                                1,
                              )}`}
                            >
                              {this.state.departments[index][key]}
                            </td>
                          )
                        case 'budget':
                        case 'selfFinancing':
                          return (
                            <td
                              key={key}
                              className={`department${key[0].toUpperCase()}${key.slice(
                                1,
                              )}`}
                            >
                              {this.props.session &&
                              this.props.session.me ? (
                                <Mutation
                                  mutation={queries.UP_PLACE}
                                  variables={{
                                    id: department.id,
                                    attribute: key,
                                    facultyId: this.props.faculty.id,
                                  }}
                                >
                                  {(
                                    upPlaceMutation,
                                    { data, loading, error },
                                  ) => (
                                    <ArrowDropUp
                                      onClick={() =>
                                        this.upPlace(
                                          index,
                                          upPlaceMutation,
                                        )
                                      }
                                    />
                                  )}
                                </Mutation>
                              ) : (
                                ''
                              )}

                              {this.state.departments[index][key]}

                              {this.props.session &&
                              this.props.session.me ? (
                                <Mutation
                                  mutation={queries.DOWN_PLACE}
                                  variables={{
                                    id: department.id,
                                    attribute: key,
                                    facultyId: this.props.faculty.id,
                                  }}
                                >
                                  {(
                                    downPlaceMutation,
                                    { data, loading, error },
                                  ) => (
                                    <ArrowDropDown
                                      onClick={() =>
                                        this.downPlace(
                                          index,
                                          key,
                                          downPlaceMutation,
                                        )
                                      }
                                    />
                                  )}
                                </Mutation>
                              ) : (
                                ''
                              )}
                            </td>
                          )
                        default:
                          return ''
                      }
                    })}
                  </tr>
                )
              },
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}
