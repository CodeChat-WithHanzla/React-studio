# AddTodo Component

```jsx
<div className="max-w-sm mx-auto mb-5">
  <form
    className="flex items-center border-b-2 border-teal-500 py-2"
    onSubmit={(e) => addFun(e)}
  >
    <input
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      spellCheck="false"
      type="text"
      id="small-input"
      className="appearance-none bg-transparent border-none w-full text-gray-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
      placeholder="Add Todo"
      aria-label="Add Todo"
      autoComplete="off"
    />
    <button
      type="submit"
      className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
    >
      <FaPlus className="w-2 h-2" />
    </button>
  </form>
</div>
```

# Todos Component

```jsx
<ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
  <li className="w-full px-4 py-2 border-b border-gray-200 last:border-b-0 dark:border-gray-600 flex justify-between">
    <button>
      <FaTrash className="w-3 h-3" />
    </button>
  </li>
</ul>
```
