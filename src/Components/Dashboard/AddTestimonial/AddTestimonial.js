import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const AddTestimonial = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const productData = {
          name: data.name,
          review: data.review
        };
        const url = `https://pacific-depths-73984.herokuapp.com/adTestimonials`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response', res))
  };
    return (
        <div className="row">
        <div className="col-md-3 p-5">
            <Sidebar></Sidebar>
        </div>
        <div className="col-md-9 p-5 bg-info">
            <h2>Add a review</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input {...register("name", { required: true })} className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                    <label htmlFor="review">Review</label>
                        <input {...register("review", { required: true })} className="form-control" />
                        {errors.review && <span className="text-danger">This field is required</span>}
                    </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddTestimonial;