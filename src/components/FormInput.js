import React from 'react'
import './FormInput.css'

const FormInput = ({userName, handleChange, onSubmit}) => {
    return (
        <div className='input-group'>
                <input className='name-input' placeholder='Enter Name' type='text' name='userName' value={userName} onChange={handleChange} autoComplete="off" spellCheck='false' autoFocus required/>
                <button className='my-button secondary' onClick={onSubmit} >Submit</button>  
        </div>
        
    )
}

export default FormInput;