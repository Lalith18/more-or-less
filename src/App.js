import React from 'react';
import StartPage from './pages/StartPage';
import QnPage from './pages/QnPage';
import ResultsPage from './pages/ResultsPage';
import './App.css';

import {connect} from 'react-redux'

const App = () => { 
    const {page} = this.props;
    return (
      <div className="App">
      { page === 1 
        ?<StartPage />
        : page ===2 ? <QnPage />
                    : <ResultsPage />
      }
      </div>
    );
  }

const mapStateToProps = state => ({
  page: state.details.page
})

export default connect(mapStateToProps)(App);

      
