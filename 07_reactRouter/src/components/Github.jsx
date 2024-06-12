import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState('')
    useEffect(()=>{
        fetch('https://api.github.com/users/CodeChat-WithHanzla')
        .then(response=>response.json())
        .then(data=>setData(data))
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center justify-center gap-3'>
    <p>Github followers : {data.followers}</p>
    <img src={data.avatar_url} alt="Git picture" width={300} className='rounded '/>
    </div>
  )
}

export default Github