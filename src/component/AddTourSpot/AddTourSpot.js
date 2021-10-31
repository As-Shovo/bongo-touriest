import React from 'react';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import './AddToutSpot.css';

const AddTourSpot = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        fetch("https://glacial-harbor-41487.herokuapp.com/tourService",{
            method:"POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.acknowledged){
                alert('data send');
                reset()
            }
        });


        console.log(data);
    };




    return (
        <div>
            <h1 className="text-center">ADD TOUR SPOT</h1>
            <Container className="form-body">
                <form onSubmit={handleSubmit(onSubmit)} className="addTourSpot-form">
                    <input required placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                    <input required type="email" placeholder="Email" value={user?.email} {...register("email")} />
                    <input required placeholder="image link" {...register("img")} />
                    <input required placeholder="Decribtion" {...register("dec")} />
                    <input type="submit" placeholder="Add Tour Spot" />
                </form>
            </Container>
        </div>
    );
};

export default AddTourSpot;