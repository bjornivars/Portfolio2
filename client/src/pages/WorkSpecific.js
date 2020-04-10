import { useParams } from "react-router";
import React from 'react';
import projects from './../components/projectsArray';
import WorkClick from './../components/workSpecific';

export default function WorkSpecific() {
 let { name } = useParams();


 for (let proj in projects) {
     if (projects[proj].name.toLocaleLowerCase() == name) {
         let p = projects[proj]
         console.log(p.process[0].planningAndDesign[0].text)
    return (
        <div>
            <div className=' [ col-md-12 ] '>
                {
                    (p !== undefined) ?
                        <WorkClick
                            name={p.name}
                            type={p.type}
                            imageUrl={p.imageUrl}
                            brief={p.brief}
                            planningText={p.process[0].planningAndDesign[0].text}
                        /> :
                        <div className=' [ d-flex justify-content-center col-md-6 ] '>
                            <img className=' [ w-100 ] ' src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' alt='loading' />
                        </div>
                }
            </div>
        </div>
    )
     }
 }

}