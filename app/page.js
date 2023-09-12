"use client"
import React, { useState } from 'react'
const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")  
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e)=>{
   e.preventDefault()
   setMainTask([...mainTask,{title,desc}]);
   settitle("");
   setdesc("");
   console.log(mainTask);
  }
  const deleteHandler = (i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  let renderTask=<h2>No Task Available</h2>
  if(mainTask.length>0){
    renderTask= mainTask.map((t,i)=>{
      return (
      <li key={i} className='flex items-center justify-between mb-5'>
        <div className='w-2/3'>
        <h5 className='text-2xl font-semibold '>{t.title}</h5>
        <h6 className='text-x1 font-semibold'>{t.desc}</h6>
      </div>
      <button className=' bg-red-400 text-white px-4 py-2 rounded' onClick={()=>deleteHandler(i)}>Delete</button>
      </li>
      );
    })
  }
  
 return (
   <>
   <h1 className='bg-black text-white p-5 text-4xl font-bold text-center'>My Todo List</h1>
   <form onSubmit={submitHandler}> 
    <input className='border-zinc-800 text-2xl m-5 px-4 py-2 border-4 rounded' placeholder='Enter the task here' value={title} 
    onChange={(e)=>{
      settitle(e.target.value)
    }}/>
    <input className='border-zinc-800 text-2xl m-5 px-4 py-2 border-4 rounded' placeholder='Enter the description here'value={desc} 
    onChange={(e)=>{
      setdesc(e.target.value)
    }}/>
    <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded'>Add Task</button>
   </form>
   <hr/>
   <div className="p-8 bg-slate-200">
    <ul>{renderTask}</ul>
  </div>
   </>
  )
}
export default page

