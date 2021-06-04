import './Options.css';


const Options = ({prevName, checkMore, checkLess }) => {
    return (
      <div className="options">
        <h3 className='qn-words'>has</h3>
        <button className='my-button options-button' onClick={checkMore}><h3 className='options-text'>MORE</h3></button>
        <button className='my-button options-button' onClick={checkLess}><h3 className='options-text'>LESS</h3></button>
        <h3 className='qn-words'>followers than {prevName}</h3>
      </div>
    );
  };
  
  export default Options;
