import React, { useState, useRef } from 'react';
import './Form.css'

const Form = ({onInsert}) => {
    const nameRef = useRef()
    const [input, setInput] = useState('')
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        onInsert( input )
    }
    return (
        <div className="Form">
            <form onSubmit = {handleSubmit}>
                <input ref={nameRef} type="text" placeholder="할일입력" onChange = {handleChange} name = "input" value = {input}  />
                <button type = "submit">추가</button>
            </form>
        </div>
    );
};

export default Form;