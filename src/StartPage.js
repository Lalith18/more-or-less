import React from 'react';
import './StartPage.css';

const StartPage = ({changePage}) => {
    return (
        <div className = 'background'>
            <div className = 'pt7'>
                <h1 className='title white ma0'><span className='green'>More </span>or<span className='dark-red'> Less</span></h1>
                <h3 className='f2 white ma0'>Instagram followers edition</h3>
                <button className='white f2 b ma5 pv3 ph5 bg-green hover-bg-dark-green bn br-pill' 
                    onClick= {() => changePage(2)}>
                    START
                </button>
            </div>
        </div>
    )
}

export default StartPage;

