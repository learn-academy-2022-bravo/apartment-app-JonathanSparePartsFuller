import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import apartments from './mockApartments'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: apartments
    }
  }
  // Backend Stuff

  // componentDidMount(){
  //   this.readApartment()
  // }

  // readApartment = () => {
  //   fetch("http://localhost:3000/apartments")
  //   .then(response => response.json())
  //   .then(apartmentsArray => this.setState({apartments: apartmentsArray}))
  //   .catch(errors => console.log("Apartment read errors:", errors))
  // }
  
  // Will get to this when frontend is stable

    render() {
    return (
      
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" render={(props) => <Home apartment={this.state.apartment} />} /> 
            <Route path="/apartmentindex" render={(props) => <ApartmentIndex apartments={this.state.apartments} />}  />
            <Route path="/apartmentshow" component={ApartmentShow} />
            <Route path="/apartmentnew" component={ApartmentNew} />
            <Route path="/apartmentedit" component={ApartmentEdit} />
            <Route component={NotFound}/>
          </Switch>
          <Footer {...this.props} />
        </Router>
        
        
  
    )
  }
}

export default App