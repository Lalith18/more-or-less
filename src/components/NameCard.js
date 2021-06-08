import React from 'react';
import './NewCard.css'

const NameCard = ({rank, username, score}) => {
    return (
        <div className='name-card' >
            <div>
                <span className='rank'>{rank}</span>
                <span className='username'>{username}</span>
            </div>
            <span className='score-leaderboard'>{score}</span>
        </div>
    )
}

export default NameCard;