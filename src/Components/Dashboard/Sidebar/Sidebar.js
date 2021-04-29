import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [admin, setAdmin] = useState([]);
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
    console.log(isAdmin)
    return (
        <div className="sidebar bg-light p-5">
            <h1>sidebar</h1>
            <div>
                {isAdmin &&

                    <div>
                        <h5><Link to="/services">Services</Link></h5>
                        <h5><Link to="/addAdmin">Add Admin</Link></h5>
                        <h5><Link to="/addService">Add Service</Link></h5>
                    </div>
                }
                <h5><Link to="/bookings">Bookings</Link></h5>
                
                <h5><Link to="/addTestimonial">Add Review</Link></h5>
                
                
            </div>
        </div>
    );
};

export default Sidebar;