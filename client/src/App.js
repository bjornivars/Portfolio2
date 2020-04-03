import React from 'react';
import './scss/styles.scss';
import Navbar from './components/navbar';


export default function App(props) {

  return (
    <div className='App'>
      <Navbar /> 
        {props.children}
      {/*   <Footer /> */}
    </div>
  )

}
