import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaSave ,FaCheckSquare, FaSquare} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo,toggleCompleted } from "../slices/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const [editable, setEditable] = useState(null);
  const [editedText, setEditedText] = useState("");
  const dispatch = useDispatch();

  const handleEdit = (id,text) =>{
    setEditable(id)
    setEditedText(text)
    dispatch(toggleCompleted(id))
  }
  const handleSave = (id) =>{
   dispatch(updateTodo({id,text:editedText}))
   setEditable(null)
  }
  return (
    <>
      <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white hidden">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`w-full px-4 py-2 border-b border-gray-200 last:border-b-0 dark:border-gray-600 flex justify-between items-center ${todo.completed ? 'line-through' : ''}`}
          >
            <button onClick={() => dispatch(toggleCompleted(todo.id))}>
                  {todo.completed ? (
                    <FaCheckSquare className="w-3 h-3" />
                  ) : (
                    <FaSquare className="w-3 h-3" />
                  )}
                </button>
             
            <input
              spellCheck='false'
              type="text"
              value={editable===todo.id ? editedText:todo.text}
              onChange={(e)=>setEditedText(e.target.value)}
              readOnly={editable!==todo.id}
              className="bg-transparent border-none outline-none"
            />

            <div className="flex gap-2 items-center ">
            <button>
                {editable===todo.id ? (
                 <FaSave className="w-3 h-3" onClick={()=>handleSave(todo.id)}/> 
                ) : ( 
                  <FaEdit className="w-3 h-3" onClick={()=>handleEdit(todo.id,todo.text)}/>
                )}
              </button>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                <FaTrash className="w-3 h-3" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
