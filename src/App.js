import React from 'react';
import StartPage from './pages/StartPage';
import QnPage from './pages/QnPage';
import ResultsPage from './pages/ResultsPage';
import './App.css';

import { connect } from 'react-redux'
import {initialiseProfiles} from './redux/questions/questions.actions'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      score: 0,
      highscore: 0,
    }
  }

  componentDidMount() {
    this.props.initialiseProfiles()
  }

  changePage = (page) => {
    this.setState({page});
  }

  setPage = () => {
    const {page, score, highscore} = this.state;
    if (page === 1) {
      return <StartPage changePage={this.changePage}/>
    } else if (page === 2) {
      return <QnPage changePage={this.changePage} highscore={highscore} setHighScore={this.setHighScore}/>
    } else {
      return <ResultsPage changePage={this.changePage} score={score} />
    }

  }

  setHighScore = (score) => {
    this.setState({
      score: score
    })
    if (score > this.state.highscore) {
      this.setState({
        highscore: score
      })
    }
  }
  
  render() {
    const {page, score, highscore} = this.state;
    return (
      <div className="App">
      { page === 1 
        ?<StartPage changePage={this.changePage}/>
        : page ===2 ? <QnPage changePage={this.changePage} highscore={highscore} setHighScore={this.setHighScore}/>
                    : <ResultsPage changePage={this.changePage} score={score} highscore={highscore}/>
      }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initialiseProfiles: () => dispatch(initialiseProfiles())
})

export default connect(null, mapDispatchToProps)(App);

      
