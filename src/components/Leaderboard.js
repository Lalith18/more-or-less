import React from 'react';
import './Leaderboard.css';
import NameCard from './NameCard';
import Wrong from './wrong-mark.png';
import {firestore} from '../firebase/firebase.utils';

class Leaderboard extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    getLeaderboard = async () => {
        try {
            await firestore.collection('users').get()
                            .then((querySnapshot) => {
                                const documents = querySnapshot.docs.map(doc => doc.data())
                                documents.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
                                this.setState({
                                    users: documents
                                })
                                });          
        } catch(error) {
            console.log(error.message);
        }
    }
    
    componentDidMount() {
        this.getLeaderboard()
        console.log('mount');
    }

    render() {
    const {users} = this.state
    const {closeLeaderboard} = this.props
    console.log(users);
    return(
        <div className='leaderboard'>
            <div
                className="close-button" onClick={closeLeaderboard}>
                <img src={Wrong} alt='wrong' />
            </div>
            <div className='leaderboard-title' >
                <span className='username'>Name</span>
                <span className='score-leaderboard'>Score</span>
            </div>
            <div className='scroller'>
            {users.map((data, index) =><NameCard username={data.name.toUpperCase()} rank={index + 1} score={data.score} />)}
            </div>
        </div>
    )}
}

export default Leaderboard;

