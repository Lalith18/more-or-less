import React from 'react';
import './StartPage.css';

import { connect } from 'react-redux';
import { changePage } from '../redux/details/details.actions';

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

const mapDispatchToProps = dispatch => ({
    changePage: (page) => dispatch(changePage(page))
})

export default connect(null, mapDispatchToProps)(StartPage);

