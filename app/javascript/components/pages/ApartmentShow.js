import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class ApartmentShow extends Component {
  render() {
    let { apartment } = this.props
    return (
      <>
      <h2>Please select one of our Excellent Apartments!</h2>
      <h3>Check out this one on {apartment && apartment.street}!</h3>
      <img src={apartment && apartment.image} alt="cool apartment" height="200px" />
      <p>Our cool manager {apartment && apartment.manager}!</p>
      <p>Email: {apartment && apartment.email}</p>
      <p>Price: {apartment && apartment.price}</p>
      <p>Bedrooms: {apartment && apartment.bedrooms}</p>
      <p>Bathrooms: {apartment && apartment.bathrooms}</p>
      <p>Pets: {apartment && apartment.pets}</p>

      </>
    )
  }
}
