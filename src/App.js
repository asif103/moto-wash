import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import React, { createContext, useState } from 'react';
import Bookings from './Components/Dashboard/Bookings/Bookings';
import AddTestimonial from './Components/Dashboard/AddTestimonial/AddTestimonial';
import AddServices from './Components/Dashboard/AddServices/AddServices';
import BookService from './Components/BookService/BookService';
import Services from './Components/Dashboard/Services/Services';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Bookings></Bookings>
          </PrivateRoute>
          <PrivateRoute path="/bookings">
            <Bookings></Bookings>
          </PrivateRoute>
          <PrivateRoute path="/addTestimonial">
            <AddTestimonial></AddTestimonial>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/addBooking/:service">
            <BookService></BookService>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>


      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
