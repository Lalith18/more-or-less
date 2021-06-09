import React from 'react';
import './QnPage.css';
import Profiles from '../Data/Profiles';
import Carousel from '../components/Carousel';
import Indicator from '../components/Indicator';
import Scores from '../components/Scores';

class QnPage extends React.Component {
  constructor(props) {
    super(props);
    let randNum = this.getRandNum()
    this.state = {
      x: 0,
      score: 0,
      highscore: props.highscore,
      crct: true,
      status: 'wait',
      done: randNum,
      profiles: randNum.map((num, index) => {
        let showAns = index === 0 ? 'show': 'dont'
        let profile = Profiles[num]
        profile.showAns = showAns
        return profile
      })
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
      profile.showAns = showAns
      return profile
    }
  }

  timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay));
  };

  checkMore = async () => {
    let newProfile = this.getProfile('dont')
    let { profiles, score } = this.state;
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
    } else {
      this.setState({
        status: 'wrong'
      });
      this.props.setHighScore(score);
      await this.timeout(2000);
      this.props.changePage(3);
    }
  };

  checkLess = async () => {
    let newProfile = this.getProfile('dont')
    let { profiles, score } = this.state;
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
        score: prevState.score + 1,
        profiles: [...prevState.profiles, newProfile],
        status: 'wait'
      }));
    } else {
      this.setState({
        status: 'wrong'
      });
      this.props.setHighScore(score);
      await this.timeout(2000);
      this.props.changePage(3);
    }
  };

  render() {
    const {profiles, x, status, score, highscore} = this.state
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

export default QnPage;
