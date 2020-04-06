import React from 'react';
import ContactPage from './../components/contact';

export default function Contact() {


    return (
        <div className='container'>
            <div className='container-paddingSide'>
                <h1 className='headline blue'>Want to get in touch with me?  <br />
                Fill out the form below and I will contact you.</h1>
            </div>
            <ContactPage />
        </div>
    )
}