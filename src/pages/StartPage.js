import React from 'react';
import './StartPage.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changePage } from '../redux/details/details.actions';
import { selectStartBg } from '../redux/details/details.selectors';

const StartPage = ({changePage, startBg}) => {
    return (
        <div className = 'background' style={{ backgroundImage: `linear-gradient( 45deg, rgba(255,196,66,0.9), rgb(255,123,0,0.8), rgb(254,85,26,0.8), rgb(250,53,144,0.8), rgb(168,43,193,0.9)), url(${startBg})` }}>
            <h1 className='title'>More or Less</h1>
            <h3 className='subtitle'>Instagram followers edition</h3>
            <button className='my-button' 
                onClick= {() => changePage(2)}>
                START
            </button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    startBg: selectStartBg
})

const mapDispatchToProps = dispatch => ({
    changePage: (page) => dispatch(changePage(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);

