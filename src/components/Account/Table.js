import React, { Component } from 'react'
import { Badge, Table } from 'reactstrap'
import { Mutation } from 'react-apollo'

import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons'

import * as queries from './queries'

export default class TableComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: this.props.faculty.counter,
      departments: [...this.props.faculty.departments],
    }
  }

  incrementCounter = async upPlaceMutation => {
    await upPlaceMutation()

    this.setState({ counter: this.state.counter + 1 })
  }

  downPlace = async (index, key, downPlaceMutation) => {
    const { departments } = this.state
    if (departments[index][key] <= 0) return

    const { data } = await downPlaceMutation()
    const { downPlace } = data

    departments[index] = { ...downPlace }

    this.setState({ departments, counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <Badge color="primary" pill>
          {this.props.faculty.name}
        </Badge>
        <Badge color="danger" pill>
          {this.state.counter}{' '}
          {this.props.session.me ? (
            <Mutation
              mutation={queries.INCREMENT_COUNTER}
              variables={{
                facultyId: this.props.faculty.id,
              }}
            >
              {(upPlaceMutation, { data, loading, error }) => (
                <ArrowDropUp
                  onClick={() =>
                    this.incrementCounter(upPlaceMutation)
                  }
                />
              )}
            </Mutation>
          ) : (
            ''
          )}
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
                              {/*                               {this.props.session &&
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
                              )} */}

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
