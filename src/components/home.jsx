import React, { useEffect, useState } from 'react'
import firebase from '../firebase.js'
import { signOut } from 'firebase/auth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import User from '../pages/Users.jsx'
import TaskList from '../pages/Tasklist.jsx'
import Tasks from '../pages/tasks.jsx'
import "../styles/home.css"

function Home() {
  const [currentUser, setCurrentUser] = useState("")
  const [Shows, setShows] = useState("")
  const Navigate = useNavigate()
  const handleSignOut = () => {
    if(localStorage.getItem("auth")){
      Navigate('/')
      localStorage.removeItem("auth")
    }
    if(!localStorage.getItem("auth")){
      signOut(firebase.auth()).then(() => {
        toast.success("SignOut SuccessFull")
        Navigate('/')
      })
        .catch((e) => {
          console.log(e)
          toast.error("SignOut Failed")
        })
    }
   
  }
  useEffect(() => {
    if(localStorage.getItem("auth")){
      setCurrentUser({email : "radhe21@gmail.com"})
    }
    if(!localStorage.getItem("auth")){
          Navigate('/')
    }
  },[])

  function shows(state) {
    setShows(state)
  }
  return (
    <>
      <div className='home'>
        <p id='email'>User Email : {currentUser.email || " "}</p>
        <div className="buttons">
          <button onClick={() => shows("user")}>User</button>
          <button onClick={() => shows("taskList")}>Tasks Lists</button>
          <button onClick={() => shows("tasks")}>Tasks</button>

        </div>
        <button id='signOut' onClick={handleSignOut}>Sign Out</button>

        {Shows === "user" && <User />}
        {Shows === "taskList" && <TaskList />}
        {Shows === "tasks" && <Tasks />}
      </div>
    </>
  )
}

export default Home