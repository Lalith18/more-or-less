import React from 'react';
import './QnPage.css';
import Carousel from '../components/Carousel';
import Indicator from '../components/Indicator';
import Scores from '../components/Scores';

import { connect} from 'react-redux'
import { getProfileFromFirebase, initialiseProfiles} from '../redux/questions/questions.actions'
import { createStructuredSelector } from 'reselect';
import { selectProfiles } from '../redux/questions/questions.selectors'
import {changePage} from '../redux/details/details.actions'
import { selectScore, selectHighscore } from '../redux/details/details.selectors';
import { setScore, setHighscore } from '../redux/details/details.actions';

class QnPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      crct: true,
      status: 'wait',
    }
  }

  timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  checkMore = async () => {
    const {score, profiles, setHighscore, setScore, getProfileFromFirebase} = this.props;
    getProfileFromFirebase()
    //await this.timeout(1500);
    if (profiles[score + 1].followers >= profiles[score].followers) {
      this.setState({
        status: 'correct'
      });
      await this.timeout(2000);
      setScore()
      this.setState((prevState) => ({
        x: prevState.x - 100,
        status: 'wait'
      }));
    } else {
      this.setState({
        status: 'wrong'
      });
      setHighscore()
      await this.timeout(2000);
      this.props.changePage(3);
      this.props.initialiseProfiles()
    }
  };

  checkLess = async () => {
    const { score, profiles, setScore, setHighscore, getProfileFromFirebase} = this.props
    getProfileFromFirebase()
    //await this.timeout(1500);
    if (profiles[score + 1].followers <= profiles[score].followers) {
      this.setState({
        status: 'correct'
      });
      await this.timeout(2000);
      setScore()
      this.setState((prevState) => ({
        x: prevState.x - 100,
        status: 'wait'
      }));
    } else {
      this.setState({
        status: 'wrong'
      });
      setHighscore()
      await this.timeout(2000);
      this.props.changePage(3);
      this.props.initialiseProfiles()
    }
  };

  render() {
    const {x, status} = this.state
    const { score, highscore, profiles} = this.props
    return(
      <div className='QnPage'>
        <Carousel profiles={profiles} x={x} checkMore={this.checkMore} checkLess={this.checkLess} />
        <Scores type='Highscore' value={highscore} />
        <Scores type='Score' value={score} />
        <Indicator status={status} />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  profiles: selectProfiles,
  score: selectScore,
  highscore: selectHighscore

})

const mapDispatchToProps = dispatch => ({
  getProfileFromFirebase: () => dispatch(getProfileFromFirebase()),
  initialiseProfiles: () => dispatch(initialiseProfiles()),
  changePage: (page) => dispatch(changePage(page)),
  setScore: () => dispatch(setScore()),
  setHighscore: () => dispatch(setHighscore())
})

export default connect(mapStateToProps, mapDispatchToProps)(QnPage);
