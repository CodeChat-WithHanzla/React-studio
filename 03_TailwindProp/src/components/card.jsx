import React from "react";
function handleEvent(id){
    window.open(id)
}
function Card({name='username',src='https://images.unsplash.com/photo-1554369920-d57b64da38d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVuamFiaSUyMGJveXxlbnwwfHwwfHx8MA%3D%3D',id='https://github.com'}){
    return(
    <>
    <div className="relative h-[400px] w-[300px] rounded-md inline-block mr-12">
  <img
    src={src}
    alt="Github Profiles"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{name}</h1>
    <p className="mt-2 text-sm text-gray-300">
    Computer science student with a passion for coding and a drive to explore innovative solutions. </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" onClick={()=>handleEvent(id)}>
      View Profile →
    </button>
  </div>
</div>

    </>
    )
}
export default Card