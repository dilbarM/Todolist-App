import React, { useEffect, useRef, useState } from 'react';
import './Todo.css';
import {RiDeleteBinFill} from "react-icons/ri"
import {MdOutlineDownloadDone} from "react-icons/md"

const Todo = () => {
    const [input,setInput] = useState("")
    const [todos,setTodos] = useState([])


    const handlesubmit = (e) =>{
        e.preventDefault();
    };

    const addtodo = ()=>{
        if(input !== ""){
            setTodos(
             [
            ...todos,{id:crypto.randomUUID(),title: input,completed:false },
        ]
    )
     setInput("")
        }
    };
    

    const inputRef = useRef('null')

       useEffect(()=>{
        inputRef.current.focus();
       })

       const onDelete = (id) =>{
            setTodos(todos.filter((to)=> to.id !==id))
       }

       const onDone = (id) =>{
        let complt = todos.map((list) => {
            if(list.id === id){
            return ({...list, completed : !list.status})
            }
            return list
        })
        setTodos(complt);
       }


      

    return (
        <>
        <div className='form'>
        <div className='container'>
                             <h1>Todo List</h1>
                             <form className='form-todo' onSubmit={handlesubmit}>
                                <input type='text'
                                    value={input} ref={inputRef}
                                    placeholder='Add task'
                                    onChange={(e) => setInput(e.target.value)} />
                                <button onClick={addtodo}>ADD</button>
                            </form>


        <ul>
       {todos.map((todo) => {
    return (
            <li   className='list-items' key={todo.id}>
            
            <div className='list' id={todo.completed ? 'list-i' : ''} >{todo.title}</div>
            
            <MdOutlineDownloadDone className='icons' id='done' title='md' onClick={() =>onDone(todo.id)}/>
            <RiDeleteBinFill className='icons' id='complete' title='ri' onClick={()=>onDelete(todo.id)}/>
            
            
            </li>
    )
})}
        </ul>
    </div>
        </div>
        
        </>
    );
};

export default Todo;