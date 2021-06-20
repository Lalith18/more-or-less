import React from 'react';
import './QnPage.css';
import Carousel from '../components/Carousel';
import Indicator from '../components/Indicator';
import Scores from '../components/Scores';
import { storage } from '../firebase/firebase.utils';

import { connect} from 'react-redux'
import { getProfileFromFirebase, initialiseProfiles, nextQuestion, showAns} from '../redux/questions/questions.actions'
import { createStructuredSelector } from 'reselect';
import { selectProfiles, selectStatus, selectX } from '../redux/questions/questions.selectors'
import { selectScore, selectHighscore } from '../redux/details/details.selectors';
import { setScore, setHighscore, changePage, setBg } from '../redux/details/details.actions';

class QnPage extends React.Component {
  timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  getBg = (score, highscore) => {
    let num = Math.floor(Math.random() * 4)
    if ( score > highscore && score > 3) {
        num = Math.floor(Math.random() * 3) + 4
    } else if (score > 3) {
        num = Math.floor(Math.random() * 3) + 7
    }
    storage.ref().child(`background/${num}.jpg`).getDownloadURL().then(url => this.props.setBg(url))
  }

  checkMore = async () => {
    const {score, highscore, profiles, setHighscore, setScore, getProfileFromFirebase, changePage, initialiseProfiles, nextQuestion, showAns} = this.props;
    getProfileFromFirebase()
    await this.timeout(1500)
    if (profiles[score + 1].followers >= profiles[score].followers) {
      showAns('correct')
      await this.timeout(2000);
      setScore()
      nextQuestion()
    } else {
      showAns('wrong')
      this.getBg(score, highscore)
      await this.timeout(2000);
      changePage(3);
      setHighscore()
      initialiseProfiles()
    }
  };

  checkLess = async () => {
    const { score, highscore, profiles, setScore, setHighscore, getProfileFromFirebase, changePage, initialiseProfiles, showAns, nextQuestion} = this.props
    getProfileFromFirebase()
    await this.timeout(1500)
    if (profiles[score + 1].followers <= profiles[score].followers) {
      showAns('correct')
      await this.timeout(2000);
      setScore()
      nextQuestion()
    } else {
      showAns('wrong')
      this.getBg(score, highscore)
      await this.timeout(2000);
      changePage(3);
      setHighscore()
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
  showAns: (status) => dispatch(showAns(status)),
  setBg: (bg) => dispatch(setBg(bg))
})

export default connect(mapStateToProps, mapDispatchToProps)(QnPage);
