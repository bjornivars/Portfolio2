import { useParams } from "react-router";
import React from 'react';
import projects from './../components/projectsArray';


export default function WorkSpecific() {
 let { name } = useParams();
/*  console.log(name);
    const projectResult = projects;
    console.log(projectResult)
 */
    return (
        <div>
            <div className=' [ col-md-12 ] '>
{/*                 {
                    (projectResult !== undefined) ?
                        <WorkClick
                            name={workResult.name}
                            type={workResult.type}
                        /> :
                        <div className=' [ d-flex justify-content-center col-md-6 ] '>
                            <img className=' [ w-100 ] ' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                        </div>
                } */}
            </div>
        </div>
    )
}