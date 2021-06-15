import React from 'react';
import './QnPage.css';
import Profiles from '../Data/Profiles';
import Carousel from '../components/Carousel';
import Indicator from '../components/Indicator';
import Scores from '../components/Scores';

import {firestore} from '../firebase/firebase.utils'

import { connect } from 'react-redux';
import { changePage, changeScore, changeHighscore} from '../redux/details/details.actions';

class QnPage extends React.Component {
  constructor(props) {
    super(props);
    let randNum = this.getRandNum()
    this.state = {
      x: 0,
      crct: true,
      status: 'wait',
      done: randNum,
      profiles: randNum.map((num, index) => {
        let showAns = index === 0 ? 'show': 'dont'
        //let profile = Profiles[num]
        let profile = this.getFirebase(num)
        profile.showAns = showAns
        return profile
      })
    }
  }

  getFirebase = async (num) => {
    try {
      let ig = {}
      await firestore.collection('ig').doc(num.toString()).get().then((doc) => {
        if (doc.exists) {
            return doc.data()
            
        } else {
            console.log("No such document!");
          }
      })
    } catch (error) {
      console.log(error.mesage);
    }
  }

  getRandNum = () => {
    let initialThree = []
    
    while (initialThree.length !== 3) {
      let num = Math.floor(Math.random() * 10) 
      if (!initialThree.includes(num)) {
        initialThree.push(num)
      }
    }
    return initialThree
  }

  getProfile = (showAns) => {
    let num = Math.floor(Math.random() * 10) 
    let done = this.state.done
    if (done.length === 10) {
      this.props.changePage(3)
    }else {
      if(done.includes(num)) {
        return this.getProfile(showAns)
      }
      done.push(num)
      this.setState({
        done: done
      })
      let profile = Profiles[num]
      this.getFirebase(num)
      profile.showAns = showAns
      return profile
    }
  }

  timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  checkMore = async () => {
    let newProfile = this.getProfile('dont')
    let { profiles } = this.state;
    const {score, changePage, changeScore, changeHighscore} = this.props
    profiles[score + 1].showAns = "animate";
    this.setState({
      profiles: profiles
    });
    await this.timeout(1500);
    if (profiles[score + 1].followers >= profiles[score].followers) {
      this.setState({
        status: 'correct'
      });
      await this.timeout(2000);
      this.setState((prevState) => ({
        x: prevState.x - 100,
        score: prevState.score + 1,
        profiles: [...prevState.profiles, newProfile],
        status: 'wait'
      }));
      changeScore()
    } else {
      this.setState({
        status: 'wrong'
      });
      changeHighscore()
      await this.timeout(2000);
      changePage(3)
    }
  };

  checkLess = async () => {
    let newProfile = this.getProfile('dont')
    let { profiles } = this.state;
    const {score, changePage, changeScore, changeHighscore} = this.props
    profiles[score + 1].showAns = "animate";
    this.setState({
      profiles: profiles
    });
    await this.timeout(1500);
    if (profiles[score + 1].followers <= profiles[score].followers) {
      this.setState({
        status: 'correct'
      });
      await this.timeout(2000);
      this.setState((prevState) => ({
        x: prevState.x - 100,
        profiles: [...prevState.profiles, newProfile],
        status: 'wait'
      }));
      changeScore()
    } else {
      this.setState({
        status: 'wrong'
      });
      changeHighscore();
      await this.timeout(2000);
      changePage(3);
    }
  };

  render() {
    const {profiles, x, status} = this.state
    const {score, highscore} = this.props
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

const mapStateToProps = state => ({
  score: state.details.score,
  highscore: state.details.highscore
})

const mapDispatchToProps = dispatch => ({
  changePage: page => dispatch(changePage(page)),
  changeScore: () => dispatch(changeScore()),
  changeHighscore: () => dispatch(changeHighscore())
})

export default connect(mapStateToProps, mapDispatchToProps)(QnPage);
