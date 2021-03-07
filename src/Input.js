import React from 'react'

const Input = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input required id={props.id} name={props.name} placeholder={props.placeholder} value={props.value} onChange={({ target }) => props.handleChange(props.id, target.value)} />
        </div>
    )
}

export default Input;
