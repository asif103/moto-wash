import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const Services = () => {
    const [services, setServices] = useState([])
    const deleteProduct = (id) => {
        fetch(`https://pacific-depths-73984.herokuapp.com/deleteService/${id}`,{
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            if (result) {
                fetch('https://pacific-depths-73984.herokuapp.com/services')
                .then(res => res.json())
                .then(data => setServices(data))
            //     event.target.parentNode.style.display = 'none';
            //    console.log(event.target.parentNode) 
            }
        })
    }
  useEffect(() => {
    fetch('https://pacific-depths-73984.herokuapp.com/services')
      .then(response => response.json())
    .then(data => setServices(data))
  }, [])
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
                        <th>Service Name</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            services.map(service =>
                                <tr>
                                    <td>{service.name}</td>
                                    <td><img src={service.imageURL} alt="" height="150" width="150" /></td>
                                    <td><button className="btn btn-danger" onClick={() => deleteProduct(service._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
                                </tr>)
                        }
                   
                </tbody>
            </Table>
        </div>
    </div>
    );
};

export default Services;