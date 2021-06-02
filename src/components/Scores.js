import React from 'react';
import './Scores.css';

const Scores = ({type, value}) => {
    return(
        <div className={type} >
            <h3 className='score-font' >{type}: {value}</h3>
        </div>
    )
}

export default Scores;