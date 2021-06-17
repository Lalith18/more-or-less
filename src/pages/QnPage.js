import React from 'react';
import './QnPage.css';
import Carousel from '../components/Carousel';
import Indicator from '../components/Indicator';
import Scores from '../components/Scores';

import { connect} from 'react-redux'
import { getProfileFromFirebase, initialiseProfiles, nextQuestion, showAns} from '../redux/questions/questions.actions'
import { createStructuredSelector } from 'reselect';
import { selectProfiles, selectStatus, selectX } from '../redux/questions/questions.selectors'
import { selectScore, selectHighscore } from '../redux/details/details.selectors';
import { setScore, setHighscore, changePage } from '../redux/details/details.actions';

class QnPage extends React.Component {
  timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  checkMore = async () => {
    const {score, profiles, setHighscore, setScore, getProfileFromFirebase, changePage, initialiseProfiles, nextQuestion, showAns} = this.props;
    getProfileFromFirebase()
    if (profiles[score + 1].followers >= profiles[score].followers) {
      showAns('correct')
      await this.timeout(2000);
      setScore()
      nextQuestion()
    } else {
      showAns('wrong')
      setHighscore()
      await this.timeout(2000);
      changePage(3);
      initialiseProfiles()
    }
  };

  checkLess = async () => {
    const { score, profiles, setScore, setHighscore, getProfileFromFirebase, changePage, initialiseProfiles, showAns, nextQuestion} = this.props
    getProfileFromFirebase()
    if (profiles[score + 1].followers <= profiles[score].followers) {
      showAns('correct')
      await this.timeout(2000);
      setScore()
      nextQuestion()
    } else {
      showAns('wrong')
      setHighscore()
      await this.timeout(2000);
      changePage(3);
      initialiseProfiles()
    }
  };

  render() {
    const {x, status, score, highscore, profiles} = this.props
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
  highscore: selectHighscore,
  status: selectStatus,
  x: selectX

})

const mapDispatchToProps = dispatch => ({
  getProfileFromFirebase: () => dispatch(getProfileFromFirebase()),
  initialiseProfiles: () => dispatch(initialiseProfiles()),
  changePage: (page) => dispatch(changePage(page)),
  setScore: () => dispatch(setScore()),
  setHighscore: () => dispatch(setHighscore()),
  nextQuestion: () => dispatch(nextQuestion()),
  showAns: (status) => dispatch(showAns(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(QnPage);
