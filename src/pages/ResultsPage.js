import React from 'react';
import './ResultsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const ResultsPage = ({changePage, score, highscore}) => {
    return (
        <div className = 'result-background'>
                <h1 className='result-title'>You scored: </h1>
                <h1 className='score'>{score}</h1>
                <h1 className='highscore-title'>Your HighScore: {highscore}</h1>
                <button className='my-button' 
                    onClick= {() => changePage(2)}>
                    Try Again
                </button>
                <div className='footer'>
                    <div className='developer'>
                        <h1 className='role'>Web Developer</h1>
                        <span className='name'>Lalith</span>
                        <a href="https://www.instagram.com/lalith_leftie/" rel="noreferrer" target="_blank"><button type="button" class="my-button social-button"><FontAwesomeIcon icon={faInstagram} /></button></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=leftoverdeveloper1@gmail.com" rel="noreferrer" target="_blank"><button type="button" class="my-button social-button"><FontAwesomeIcon icon={faEnvelope} /></button></a>
                        <a href="https://github.com/Lalith18/more-or-less" rel="noreferrer" target="_blank"><button type="button" class="my-button social-button"><FontAwesomeIcon icon={faGithub} /></button></a>
                    </div>
                    <div className='designer'>
                        <h1 className='role'>UI/UX Designer</h1>
                        <span className='name'>Ramasamy</span>
                        <a href="https://www.instagram.com/lalith_leftie/" rel="noreferrer" target="_blank"><button type="button" class="my-button social-button"><FontAwesomeIcon icon={faInstagram} /></button></a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=leftoverdeveloper1@gmail.com" rel="noreferrer" target="_blank"><button type="button" class="my-button social-button"><FontAwesomeIcon icon={faEnvelope} /></button></a>
                    </div>
                </div>
        </div>
    )
}

export default ResultsPage;


