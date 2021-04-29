import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Bookings = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([])
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://pacific-depths-73984.herokuapp.com/isAdmin/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data));
    }, [])
    if (isAdmin) {
        const allBookingData = () => {
            fetch('https://pacific-depths-73984.herokuapp.com/bookings')
              .then(response => response.json())
            .then(data => setBookings(data))
        }
    }
    else {
        fetch('https://pacific-depths-73984.herokuapp.com/bookingByEmail/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setBookings(data));
    }
        
        
    return (
        <div className="row">
        <div className="col-md-3 p-5">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 p-5 bg-info">
            <h2>Booking List</h2>
            <Table striped bordered hover variant="warning">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Booked By</th>
                    <th>Booked By Email</th>
                    <th>Service</th>
                    </tr>
                </thead>
                <tbody>
                {
                    bookings.map(booking =>
                        <tr>
                            <td>{booking.name}</td>
                            <td>{booking.bookedBy}</td>
                            <td>{booking.bookedByEmail}</td>
                            <td>{booking.serviceName}</td>
                            
                        </tr>)
                }
                </tbody>
            </Table>
        </div>
    </div>
    );
};

export default Bookings;