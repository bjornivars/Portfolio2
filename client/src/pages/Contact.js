import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    }; // your form submit function which will invoke after successful validation

    console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <div className='container'>
        <div className='container-paddingSide blue'>
        <h1 className='headline'>Here are some of my projects <br />
        during these two years at school.</h1>
    </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input type="text"
                placeholder="First Name"
                name="firstName"
                ref={register({ required: true, maxLength: 80 })} />
            {errors.firstName && <p>First name is required</p>}

            <label>Last Name</label>
            <input type="text"
                placeholder="Last name"
                name="lastName"
                ref={register({ required: true, maxLength: 80 })} />
            {errors.lastName && <p>Last name is required</p>}

            <label>Email</label>
            <input type="text"
                placeholder="Email"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <p> Email is required</p>}

            <label>Mobile number</label>
            <input type="tel" 
            placeholder="Mobile number" 
            name="mobileNumber" 
            ref={register({required: true, pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{2})\2([0-9]{3})/, minLength: 6, maxLength: 12})} />
            {errors.mobileNumber && <p> Mobile number is incorrect or missing</p>}

            <label>Message</label>
            <textarea type="text"
                placeholder="Message"
                name="message"
                ref={register({ required: true, maxLength: 800 })} />
            {errors.message && <p>Message is required</p>}

            <input type="submit" />
        </form>
        </div>
    );
}