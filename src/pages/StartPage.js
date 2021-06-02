import React from 'react';
import './StartPage.css';

const StartPage = ({changePage}) => {
    return (
        <div className = 'background'>
            <h1 className='title'>More or Less</h1>
            <h3 className='subtitle'>Instagram followers edition</h3>
            <button className='my-button' 
                onClick= {() => changePage(2)}>
                START
            </button>
        </div>
    )
}

export default StartPage;

