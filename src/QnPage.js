import React from 'react';
import './QnPage.css';
import Profiles from './Data/Profiles';
import Carousel from './components/Carousel.js';
import Indicator from './components/Indicator';

class QnPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      score: 0,
      crct: true,
      status: 'wait',
      done: this.props.randNum,
      profiles: [
        this.getInitialProfile(0, 'show'),
        this.getInitialProfile(1, 'dont'),
        this.getInitialProfile(2, 'dont'),
      ]
    }
  }

  getInitialProfile = (num, showAns) => {
    let profile = Profiles[this.props.randNum[num]]
    profile.showAns = showAns
    return profile
  }

  getProfile = (showAns) => {
    let num = Math.floor(Math.random() * 10) 
    let done = this.props.randNum
    if (done.length === 10) {
      this.props.changePage(1)
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
      await this.timeout(2000);
      this.props.changePage(1);
    }
  };

  checkLess = async () => {
    let newProfile = this.getProfile('dont')
    let { profiles, score } = this.state;
    profiles[score + 1].showAns = "animate";
    this.setState({
      profiles: profiles
    });

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
      await this.timeout(2000);
      this.props.changePage(1);
    }
  };

  render() {
    const {profiles, x, status} = this.state
    return(
      <div className='QnPage'>
        <Carousel profiles={profiles} x={x} checkMore={this.checkMore} checkLess={this.checkLess} />
        <Indicator status={status} />
      </div>
    )
  }
}

export default QnPage;
