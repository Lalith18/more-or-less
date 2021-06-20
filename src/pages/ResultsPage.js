import React from 'react';
import './ResultsPage.css';
import FormInput from '../components/FormInput'
import Leaderboard from '../components/Leaderboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

import {updateLeaderboard} from '../firebase/firebase.utils'

import { connect } from 'react-redux';
import { changePage, resetScore } from '../redux/details/details.actions';
import { createStructuredSelector } from 'reselect';
import { selectHighscore, selectScore, selectBg } from '../redux/details/details.selectors';
import { toggleShowLeaderboard, updateName, clickedSubmit, submitResults } from '../redux/results/results.actions';
import { selectShowLeaderboard, selectUsername, selectSubmit1, selectSubmit2} from '../redux/results/results.selectors';

class ResultsPage extends React.Component {
    onSubmit = async () => {
        const {userName, score } = this.props
        if (!userName) {
            return
        }
        this.props.submitResults()
        await updateLeaderboard(userName, score);
        console.log(userName, score);
    }

    handleChange = event => {
        const {value} = event.target;
        this.props.updateName(value)
    }


    render() {    
    const {bg, score, highscore, changePage, resetScore, showLeaderboard, toggleShowLeaderboard, userName, submit1, submit2, clickedSubmit} = this.props
    return (
          <div className ='result-background' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})` }} >
          {
              showLeaderboard ? <Leaderboard closeLeaderboard={() => toggleShowLeaderboard()}/>
               : <div>
            <h1 className='result-title'>You scored: </h1>
            <h1 className='score'>{score}</h1>
            <h1 className='highscore-title'>Your HighScore: {highscore}</h1>
                <button className='my-button' 
                    onClick= {() => {
                        changePage(2);
                        resetScore()
                    }}>
                    Try Again
                </button>
                {
                    submit2 ? <button className='my-button secondary leaderboard-button' onClick={() => toggleShowLeaderboard()} >Leaderboard</button>
                             : submit1 ? <FormInput userName={userName} onSubmit={this.onSubmit} handleChange={this.handleChange} />
                                            :   <div>
                                                    <button className='my-button secondary'  onClick={() => toggleShowLeaderboard()}>Leaderboard</button>
                                                    <button className='my-button secondary' onClick={() => clickedSubmit()} >Submit</button>
                                                </div>
                }
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
          }
        </div>
    )
    }
}

const mapStateToProps = createStructuredSelector({
    score: selectScore,
    highscore: selectHighscore,
    bg: selectBg,
    showLeaderboard: selectShowLeaderboard,
    userName: selectUsername,
    submit1: selectSubmit1,
    submit2: selectSubmit2,
})

const mapDispatchToProps = dispatch => ({
    changePage: (page) => dispatch(changePage(page)),
    resetScore: () => dispatch(resetScore()),
    toggleShowLeaderboard: () => dispatch(toggleShowLeaderboard()),
    updateName: name => dispatch(updateName(name)),
    clickedSubmit: () => dispatch(clickedSubmit()),
    submitResults: () => dispatch(submitResults())
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);


