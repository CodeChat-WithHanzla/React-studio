import React, { useEffect, useState } from 'react'

function App() {
  const [skip, setskip] = useState(0)
  const [data, setData] = useState([])
  const [disable,setDisable] = useState(false)
  async function fetchData() {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${skip === 0 ? 0 : skip * 20}`)
      const result = await response.json()

      if (result && result.products && result.products.length) {
        setData((prev) => ([...prev, ...result.products]))
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [skip])
  
  useEffect(()=>{
  if(data.length === 100){
    setDisable(true)
  }
  },[data])

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((each) => (
          <div key={each.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={each.thumbnail} alt={each.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold text-gray-800">{each.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button 
          onClick={() => setskip(prev => prev + 1)} 
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          disabled={disable}
        >
          Load more
        </button>
      </div>
    </div>
  )
}

export default App
