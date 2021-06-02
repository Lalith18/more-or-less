import './Options.css';


const Options = ({ checkMore, checkLess }) => {
    return (
      <div className="options">
        <button className='my-button options-button' onClick={checkMore}><h3 className='options-text'>MORE</h3></button>
        <button className='options-button my-button' onClick={checkLess}><h3 className='options-text'>LESS</h3></button>
      </div>
    );
  };
  
  export default Options;
