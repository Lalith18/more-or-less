import React from 'react';
import './ResultsPage.css';
import FormInput from '../components/FormInput'
import Leaderboard from '../components/Leaderboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

import {updateLeaderboard} from '../firebase/firebase.utils'

class ResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: this.getNum(),
            didSubmit : false,
            clickedSubmit: false,
            showLeaderboard: false,
            userName: ''
        }
    }

    getNum = () => {
        const {score, highscore} = this.props
        let num = Math.floor(Math.random() * 2)
        if ( score === highscore && score > 3) {
            num = 4 + num
        } else if (score > 3) {
            num = 2 + num
        }
        return num
    }

    onClickSubmit = () => {
        this.setState({
            clickedSubmit: true
        })
    }

    onSubmit = async () => {
        const {userName } = this.state
        const {score } = this.props
        if (!userName) {
            return
        }
        this.setState({
            didSubmit: true
        })
        await updateLeaderboard(userName, score);
        console.log(userName, score);
    }

    handleChange = event => {
        const {value} = event.target;
        this.setState({ userName: value})
    }

    showLeaderbord = () => {
        this.setState({
            showLeaderboard: true
        })
    }

    closeLeaderboard = () => {
        this.setState({
            showLeaderboard: false
        })
    }

    render() {    
    const {score, highscore, changePage} = this.props
    const { num, userName, didSubmit, clickedSubmit, showLeaderboard} = this.state
    return (
          <div className = {`result-background p${num}`} >
          {
              showLeaderboard ? <Leaderboard closeLeaderboard={this.closeLeaderboard}/>
               : <div>
            <h1 className='result-title'>You scored: </h1>
            <h1 className='score'>{score}</h1>
            <h1 className='highscore-title'>Your HighScore: {highscore}</h1>
                <button className='my-button' 
                    onClick= {() => changePage(2)}>
                    Try Again
                </button>
                {
                    didSubmit ? <button className='my-button secondary leaderboard-button' onClick={this.showLeaderbord} >Leaderboard</button>
                             : clickedSubmit ? <FormInput userName={userName} onSubmit={this.onSubmit} handleChange={this.handleChange} />
                                            :   <div>
                                                    <button className='my-button secondary'  onClick={this.showLeaderbord}>Leaderboard</button>
                                                    <button className='my-button secondary' onClick={this.onClickSubmit} >Submit</button>
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

export default ResultsPage;


