import React from 'react';
import './QnPage.css';
import Profiles from '../Data/Profiles';
import Carousel from '../components/Carousel';
import Indicator from '../components/Indicator';
import Scores from '../components/Scores';

import { connect} from 'react-redux'
import { getProfileFromFirebase, initialiseProfiles} from '../redux/questions/questions.actions'
import { createStructuredSelector } from 'reselect';
import { selectProfiles } from '../redux/questions/questions.selectors'

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

  getProfile = () => {
    this.props.getProfileFromFirebase()
    let num = Math.floor(Math.random() * 10) 
    let done = this.state.done
    if (done.length === 10) {
      this.props.changePage(3)
    }else {
      if(done.includes(num)) {
        return this.getProfile()
      }
      done.push(num)
      this.setState({
        done: done
      })
      let profile = Profiles[num]
      profile.showAns = 'dont'
      return profile
    }
  }

  timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  checkMore = async () => {
    let { score } = this.state;
    const {profiles, getProfileFromFirebase} = this.props;
    getProfileFromFirebase()
    if (profiles[score + 1].followers >= profiles[score].followers) {
      this.setState({
        status: 'correct'
      });
      await this.timeout(2000);
      this.setState((prevState) => ({
        x: prevState.x - 100,
        score: prevState.score + 1,
        status: 'wait'
      }));
      changeScore()
    } else {
      this.setState({
        status: 'wrong'
      });
      changeHighscore()
      await this.timeout(2000);
      this.props.changePage(3);
      this.props.initialiseProfiles()
    }
  };

  checkLess = async () => {
    let { score } = this.state;
    const { profiles, getProfileFromFirebase} = this.props
    getProfileFromFirebase()
    if (profiles[score + 1].followers <= profiles[score].followers) {
      this.setState({
        status: 'correct'
      });
      await this.timeout(2000);
      this.setState((prevState) => ({
        x: prevState.x - 100,
        score: prevState.score + 1,
        status: 'wait'
      }));
      changeScore()
    } else {
      this.setState({
        status: 'wrong'
      });
      changeHighscore();
      await this.timeout(2000);
      this.props.changePage(3);
      this.props.initialiseProfiles()
    }
  };

  render() {
    const {x, status, score, highscore} = this.state
    const { profiles} = this.props
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
})

const mapDispatchToProps = dispatch => ({
  getProfileFromFirebase: () => dispatch(getProfileFromFirebase()),
  initialiseProfiles: () => dispatch(initialiseProfiles())
})

export default connect(mapStateToProps, mapDispatchToProps)(QnPage);
