import React from 'react';
import StartPage from './pages/StartPage';
import QnPage from './pages/QnPage';
import ResultsPage from './pages/ResultsPage';
import './App.css';

import { connect } from 'react-redux'
import {initialiseProfiles} from './redux/questions/questions.actions'
import { createStructuredSelector} from 'reselect'
import { selectPage } from './redux/details/details.selectors';

class App extends React.Component {
  componentDidMount() {
    this.props.initialiseProfiles()
  }
  
  render() {
    const {page} = this.props
    return (
      <div className="App">
      { page === 1 
        ?<StartPage/>
        : page ===2 ? <QnPage/>
                    : <ResultsPage/>
      }
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  page: selectPage
})

const mapDispatchToProps = dispatch => ({
  initialiseProfiles: () => dispatch(initialiseProfiles())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

      
