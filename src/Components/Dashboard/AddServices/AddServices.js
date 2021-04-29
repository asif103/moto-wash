import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const AddServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '198346c1a267acb3b74df421e072ac0e');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
        setIMageURL(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    const onSubmit = data => {
        console.log(imageURL)
        const productData = {
          name: data.name,
          price: data.price,
          imageURL: imageURL
        };
        const url = `https://pacific-depths-73984.herokuapp.com/adServices`;
        
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
                            <label htmlFor="productImage">Product Name</label>
                            <input type="file" name="image" className="form-control" required onChange={handleImageUpload}/>
                        </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success" />
                </div>
            </form>
        </div>
    </div>
    );
};

export default AddServices;