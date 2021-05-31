import './Indicator.css';

const Indicator = ({status}) => {
    if (status === 'correct') {
        return (
            <div
                className="indicator green-indicator">
            </div>
        ) 
    } else if (status === 'wait') {
        return (
            <div
                className="indicator wait">
            </div>
        )
    } else if (status === 'wrong') {
        return (
            <div
                className="indicator red-indicator">
            </div>
        )
    }
}

export default Indicator;