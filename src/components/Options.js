import './Options.css';


const Options = ({ checkMore, checkLess }) => {
    return (
      <div className="options">
        <button className='white f4 b pv3 ph5 bg-green hover-bg-dark-green bn br-pill options-button' onClick={checkMore}>MORE</button>
        <button className='white f4 b pv3 ph5 bg-red hover-bg-dark-red bn br-pill options-button' onClick={checkLess}>LESS</button>
      </div>
    );
  };
  
  export default Options;