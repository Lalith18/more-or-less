import React from 'react';
import StartPage from './pages/StartPage';
import QnPage from './pages/QnPage';
import ResultsPage from './pages/ResultsPage';
import './App.css';
import { storage } from './firebase/firebase.utils';

import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { setStartBg } from './redux/details/details.actions';
import { selectPage } from './redux/details/details.selectors';

class App extends React.Component {
  componentDidMount() {
    storage.ref().child(`background/start.jpg`).getDownloadURL().then(url => this.props.setStartBg(url))
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
  setStartBg: (bg) => dispatch(setStartBg(bg))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

      
