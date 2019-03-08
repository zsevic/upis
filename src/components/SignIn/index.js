import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { isEmail } from 'validator'

import * as routes from '../../constants/routes'
import ErrorMessage from '../Error'

import {
  Jumbotron,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

const SIGN_IN = gql`
  mutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`

const SignInPage = ({ history, refetch }) => (
  <div>
    <Jumbotron>
      <h1 className="display-3 text-center">Login</h1>
      <SignInForm history={history} refetch={refetch} />
    </Jumbotron>
  </div>
)

const INITIAL_STATE = {
  login: '',
  password: '',
}

class SignInForm extends Component {
  state = { ...INITIAL_STATE }

  onChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  onSubmit = (event, signIn) => {
    signIn().then(async ({ data }) => {
      this.setState({ ...INITIAL_STATE })

      localStorage.setItem('token', data.signIn.token)

      await this.props.refetch()

      this.props.history.push(routes.LANDING)
    })

    event.preventDefault()
  }

  render() {
    const { login, password } = this.state

    const isInvalid = password.length < 7 || !isEmail(login)

    return (
      <Mutation mutation={SIGN_IN} variables={{ login, password }}>
        {(signIn, { data, loading, error }) => (
          <Form onSubmit={event => this.onSubmit(event, signIn)}>
            <Row form>
              <Col md={6} lg={{ size: 3, offset: 2 }}>
                <FormGroup>
                  <Label for="userEmail">Email</Label>
                  <Input
                    name="login"
                    value={login}
                    onChange={this.onChange}
                    type="email"
                    id="userEmail"
                    placeholder="Email or Username"
                  />
                </FormGroup>
              </Col>
              <Col md={6} lg={{ size: 3, offset: 2 }}>
                <Label for="userPassword">Password</Label>
                <Input
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  id="userPassword"
                  placeholder="Password"
                />
              </Col>

              <Col md={6} lg={{ size: 3, offset: 2 }}>
                <p className="lead">
                  <Button
                    disabled={isInvalid || loading}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </p>
              </Col>
              {error && <ErrorMessage error={error} />}
            </Row>
          </Form>
        )}
      </Mutation>
    )
  }
}

export default withRouter(SignInPage)

export { SignInForm }
