import Link from 'next/link'
import Package from '../package'
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(){
    return (
      <React.Fragment>
        <Navbar color="dark" fixed={`top`} dark expand="md">
          <Link prefetch href="/">
            <NavbarBrand href="/">
              {Package.name}
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/about"><NavLink href="/about">About</NavLink></Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/Vbubblery">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Sign-In
                  </DropdownItem>
                  <DropdownItem>
                    Sign-Up
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Sign-Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header