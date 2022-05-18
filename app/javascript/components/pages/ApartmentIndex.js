import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'

 class ApartmentIndex extends Component {
  render() {
    return (
      <>
      <h3>Our Fine list of Excellent Apartments!</h3>
        <br />
          <Col sm="6">
            {this.props.apartments.map(apartment => {
              return(
                <Card body key={apartment.id}>
                  <CardTitle>
                    <h4>{apartment.city}</h4>
                  </CardTitle>
                </Card>
              )
            })}
          </Col>
      </>
    )
  }
}
export default ApartmentIndex