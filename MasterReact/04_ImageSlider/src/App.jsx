import React from 'react'
import ImageSlider from './ImageSlider'
function App() {
  const url = 'https://picsum.photos/v2/list'
  return (
    <div>
     <ImageSlider url={url} limit={5} page={1} />
    </div>
  )
}

export default App
