import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../App';



const BookService = () => {
    const { service } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const bookingData = {
          name: data.name,
          bookedBy: loggedInUser.name,
          bookedByEmail: loggedInUser.email,
          serviceName: service
        };
        console.log(bookingData);
        const url = `https://pacific-depths-73984.herokuapp.com/addBooking`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(bookingData)
        })
        .then(res => console.log('server side response', res))
  };
    return (
        <div className="container">
            <div className="col-md-6">
                <h3>Book { service} service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Book For</label>
                        <input {...register("name", { required: true })} className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success" />
                </div>
            </form>
            </div>
            <div className="col-md-6"></div>
        </div>
    );
};

export default BookService;