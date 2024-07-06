import React from 'react';
import { FaPlus,FaTrash } from 'react-icons/fa';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo,removeAllTodos } from '../slices/todoSlice';

function AddTodo() {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const  ul = document.querySelector('ul')
  const addFun = (e) =>{
  e.preventDefault()
  //console.log(todo);
  if(todo) dispatch(addTodo(todo))
  //console.log(dispatch(addTodo(todo)));
  setTodo('')
  ul.classList.remove('hidden')
  };
  const deleteAllTodos = () =>{
    dispatch(removeAllTodos())
    ul.classList.add('hidden')
  }
  
  return (
    <div className="max-w-sm mx-auto  mb-5 ">
      <form className="flex items-center  border-b-2 border-teal-500 py-2" onSubmit={(e)=>addFun(e)}>
        <input
         value={todo}
         onChange={(e)=>setTodo(e.target.value)}
         spellCheck='false'
          type="text"
          id="small-input"
          className="appearance-none bg-transparent border-none w-full text-gray-50 mr-3 py-1 px-2 leading-tight focus:outline-none "
          placeholder="Add Todo"
          aria-label="Add Todo"
          autoComplete="off"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          <FaPlus className="w-2 h-2"/>
        </button>
        <button type="button" onClick={deleteAllTodos} className='flex-shrink-0 bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700 text-sm border-4 text-white py-1 px-2 rounded ml-3'><FaTrash className="w-2 h-2" /></button>
        
      </form>
    </div>
  );
}

export default AddTodo;
