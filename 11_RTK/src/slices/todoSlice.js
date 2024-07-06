import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed:false
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    },
    removeAllTodos:(state,action)=>{
      state.todos = []
    },
    toggleCompleted: (state,action)=>{
      state.todos = state.todos.map(todo=>(
        todo.id===action.payload ? {...todo,completed:!todo.completed} : todo
      ))
    }
  },
});

export const { addTodo, removeTodo, updateTodo,removeAllTodos,toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
