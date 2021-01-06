import React, { useState, useRef } from 'react';
import './Todo.css'
import Form from './Form';
import List from './List';

const Todo = () => {    
    const handleRemove = (no) => {
        setTodos(todos.filter(todo => todo.id !== no))
    }
    const handleToggle = (no) => {
        const toggleTodo = todos.map( todo => {
            if( todo.id === no ){
                return{
                    ...todo ,
                    flg : !todo.flg
                }
            }
            return todo 
        })
        setTodos( toggleTodo )
    }
    const noRef = useRef(1)
    const [todos , setTodos] = useState([])
    const handleInsert = (text) => {
        setTodos([
            ...todos,
            {
                id : noRef.current,
                text :text,
                flg : false
            }
        ])
        noRef.current++
    }
    return (
        <div className="Todo">
            <h1>Todo List</h1>
            <Form onInsert = {handleInsert} />
            <List todos={todos} onRemove = {handleRemove} onToggle ={handleToggle} />
        </div>
    );
};

export default Todo;