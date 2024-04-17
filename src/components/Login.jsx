import React, { useEffect, useState } from 'react'
// import { signInWithEmailAndPassword } from 'firebase/auth'
import firebase from "../firebase.js"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import "../styles/login.css"

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/home")
    }
    if (!localStorage.getItem("auth")) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigate("/home")
        }
      })
    }
  })

  const Admin = { email: "radhe21@gmail.com", password: "radhe@123" }
  const handleLogin = (e) => {
    e.preventDefault()
    if (email === Admin.email ) {
      if(password === Admin.password){
        localStorage.setItem("auth", Admin.email)
        toast.success("Admin Login success")
        navigate("/home")
      }
      else{
        toast.error("Please Enter Valid Id or password")
      }
      
    }
    if (email !== Admin.email) {
          toast.error("wrong admin Id or password")
    }
  }
  return (
    <>
      <div className='login'>
        <h1>Login Here</h1>

        <form>
          <input type="email" placeholder="User ID" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </>
  )
}

export default Login