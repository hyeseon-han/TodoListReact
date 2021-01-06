import React from 'react';
import './Item.css'

const Item = ({todo, onRemove,onToggle}) => {
    return (
        <>
            <li className="Item">
                <span className = {`${todo.flg && 'on'}`} onClick = {() => onToggle(todo.id)} > &#10003;  </span>
                <em onClick = {() => onToggle(todo.id)}> {todo.text} </em> <button onClick = {() => onRemove(todo.id)} >삭제</button>
            </li>
        </>
    );
};

export default Item;