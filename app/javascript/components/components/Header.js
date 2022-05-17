import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
        <Nav className="header-nav">
          <NavItem>
            <NavLink to="/" className="header-nav-link">Home Page</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/apartmentindex" className="header-nav-link">Check out these Apartments</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/apartmentnew" className="header-nav-link">Add your own Apartment</NavLink>
          </NavItem>
        </Nav>

        <h1>Appartment Emporium</h1>

        <Nav>
          {logged_in &&
            <NavItem>
              <a href={sign_out_route} className="nav-link">Sign Out</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={sign_in_route} className="nav-link">Sign In</a>
            </NavItem>
          }
          {!logged_in &&
            <NavItem>
              <a href={new_user_route} className="nav-link">Sign Up</a>
            </NavItem>
          }
        </Nav>

      </>
    )
  }
}
export default Header