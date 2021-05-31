import React from 'react';
import StartPage from './StartPage';
import QnPage from './QnPage';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
    }
  }

  componentDidMount() {
    this.setState({
      randNum: this.getRandNum()
    })
    console.log('mount');
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

  changePage = (page) => {
    this.setState({page});
  }
  
  render() {
    const {page, randNum} = this.state;
    console.log(randNum);
    return (
      <div className="App">
      { page === 1 
          ?<StartPage changePage={this.changePage}/>
          : <QnPage changePage={this.changePage} randNum={this.state.randNum}/>
      }
      </div>
    );
  }
}

export default App;
