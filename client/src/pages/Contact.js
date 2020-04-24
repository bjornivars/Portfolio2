import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Fade from 'react-reveal/Fade';


export default function App() {
    const [correctlySent, setcorrectlySent] = useState(undefined);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        //console.log(data.firstName);

        axios
            .post("https://submit-form.com/OqasYc1l-o24N3tDSW55W", {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobileNumber: data.mobileNumber,
                message: data.message
            })
            .then(function (response) {
                setcorrectlySent('Thanks for contacting me.')
            })
            .catch(function (response) {
                setcorrectlySent('Oh no! Something went wrong.')
            });
    };

    console.log(watch("example")); 

    return (
        <div className=' [ container ] '>
            <div className=' [ container-paddingSide blue ] '>
                <h1 className=' [ headline ] '>
                    Feel free to contact me! <br />
                    Fill out the form below
                </h1>
            </div>
            <Fade left delay={200}>
                <form onSubmit={handleSubmit(onSubmit)} action='https://submit-form.com/OqasYc1l-o24N3tDSW55W'>
                    <div>
                        <label>First Name</label>
                        <input type="text"
                            placeholder="First Name"
                            name="firstName"
                            ref={register({ required: true, maxLength: 80 })} />
                        {errors.firstName && <p>First name is required</p>}
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text"
                            placeholder="Last name"
                            name="lastName"
                            ref={register({ required: true, maxLength: 80 })} />
                        {errors.lastName && <p>Last name is required</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text"
                            placeholder="Email"
                            name="email"
                            ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                        {errors.email && <p> Email is required</p>}
                    </div>
                    <div>
                        <label>Mobile number</label>
                        <input type="tel"
                            placeholder="Mobile number"
                            name="mobileNumber"
                            ref={register({ required: true, pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{2})\2([0-9]{3})/, minLength: 6, maxLength: 12 })} />
                        {errors.mobileNumber && <p> Mobile number is incorrect or missing</p>}
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea type="text"
                            placeholder="Message"
                            name="message"
                            ref={register({ required: true, maxLength: 800 })} />
                        {errors.message && <p>Message is required</p>}
                    </div>
                    <p className={' [ correct ] '}>{correctlySent}</p>

                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </Fade>
        </div>
    );
}