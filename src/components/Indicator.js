import './Indicator.css';
import Crct from './check-mark.png';
import Wrong from './x-mark.png';

const Indicator = ({status}) => {
    if (status === 'correct') {
        return (
            <div
                className="indicator green-indicator">
                <img src={Crct} alt='correct' />
            </div>
        ) 
    } else if (status === 'wait') {
        return (
            <div
                className="indicator wait">
                <h1 className='vs'>Vs</h1>
            </div>
        )
    } else if (status === 'wrong') {
        return (
            <div
                className="indicator red-indicator">
                <img src={Wrong} alt='wrong' />
            </div>
        )
    }
}

export default Indicator;