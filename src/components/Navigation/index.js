import React, { Component, Fragment } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import SignOut from '../SignOut'
import { Link } from 'react-router-dom'
export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">upis</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret />
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to="/">Faculties</Link>
                  </DropdownItem>

                  {this.props.session &&
                    this.props.session.me &&
                    this.props.session.me.role === 'ADMIN' && (
                      <Fragment>
                        <DropdownItem>
                          <Link to="/account">Profile</Link>
                        </DropdownItem>

                        <DropdownItem divider />
                        <DropdownItem>
                          <SignOut>Log Out</SignOut>
                        </DropdownItem>
                      </Fragment>
                    )}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
