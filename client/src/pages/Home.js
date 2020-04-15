import React from 'react';

import HomePage from './../components/home';

export default function Home() {
    console.log('I am aware of warning componentWillReceiveProps. There is no current fix for this issue yet.');
    console.log('Forum link for warning: https://www.bountysource.com/issues/78548951-refactor-componentwillreceiveprops-in-revealbase')
    return (
        <div className=' [ container ] '>
            <HomePage />
        </div>
    )
}