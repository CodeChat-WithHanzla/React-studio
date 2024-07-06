import Todo from "./components/Todo"
import AddTodo from './components/AddTodo'
import {Provider} from 'react-redux'
import {store} from './app/store'
function App() {

  return (
    <Provider store={store}>
    <div className="w-screen h-screen flex justify-center items-center bg-[#111D31]">
      <div className="flex flex-col">
      <AddTodo /> 
      <Todo />
      </div>
    </div>
    </Provider>
  )
}

export default App
