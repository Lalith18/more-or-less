import React from 'react';
import StartPage from './pages/StartPage';
import QnPage from './pages/QnPage';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
    }
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
          : <QnPage changePage={this.changePage} />
      }
      </div>
    );
  }
}

export default App;
