import { useParams } from "react-router";
import React from 'react';
import projects from './../components/projectsArray';
import WorkClick from './../components/workSpecific';


export default function WorkSpecific() {
    let { name } = useParams();

    for (let proj in projects) {
        if (projects[proj].name.toLocaleLowerCase() === name) {
            let p = projects[proj]
            //console.log(p.process[0].design[0]);

            return (
                <div className=' [ container ] '>

                    <div className=' [ col-12 ] '>
                        {
                            (p !== undefined) ?
                                <WorkClick
                                    name={p.name}
                                    type={p.type}
                                    imageUrl={p.imageUrl}
                                    brief={p.brief}
                                    colorText={p.process[0].design[0].colorText}
                                    colorImage={p.process[0].design[0].colorImage}
                                    iconText={p.process[0].design[0].iconText}
                                    iconImage={p.process[0].design[0].iconImage}
                                    prototypeText={p.process[0].design[0].prototypeText}
                                    prototypeImage={p.process[0].design[0].prototypeImage}
                                    developText={p.process[0].develop[0].text}
                                    developImage={p.process[0].develop[0].image}
                                    websiteUrl={p.websiteUrl}
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