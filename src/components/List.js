import React from 'react';
import './List.css'
import Item from './Item';


const List = ({todos, onRemove,onToggle}) => {
    return (
        <div className="List">
            <ul>
                {
                    todos.map( todo => <Item todo = {todo} key = {todo.id} onRemove = {onRemove} onToggle = {onToggle}/>)
                }
            </ul>
        </div>
    );
};

export default List;