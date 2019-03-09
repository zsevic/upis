import React from 'react'
import { Badge, Table } from 'reactstrap'

const TableComponent = ({ faculty }) => (
  <div>
    <Badge color="primary" pill>
      {faculty.name}
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
        {faculty.departments.map((department, index) => {
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
                        {department[key]}
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
                        {department[key]}
                      </td>
                    )
                  default:
                    return ''
                }
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  </div>
)

export default TableComponent
