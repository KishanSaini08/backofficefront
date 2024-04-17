// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import firebase from '../firebase.js';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "../styles/login.css"


// const Login = () => {
//     const navigate = useNavigate(); // Initialize useNavigate hook

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const submit = async (e) => {
//         e.preventDefault();
//         try {
//             const user = await firebase.auth().signInWithEmailAndPassword(email, password);
//             if (user) {
//                 toast.success("Login successfully");
//                 navigate('/home'); 
//             }
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     return (
//         <>
//             <div className="main_contanier">
//                 <ToastContainer />
//                 <div className="header">
//                     <h2>Login</h2>
//                 </div>
//                 <div className="box">
//                     <input type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className="box">
//                     <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
//                 <button onClick={submit}>Login</button>
//             </div>
//         </>
//     )
// }

// export default Login;



// import React, { useState } from 'react';
// import { Link , useNavigate} from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const submit = (e) => {
//         e.preventDefault();
        
//         if(email , password) {
//             navigate('/home');
//             toast.success("Login successfully");
//         } else {
//             toast.error("Invalid email or password");
//         }
//     };

//     return (
//         <>
//             <div className="main_contanier">
//                 <ToastContainer /> {/* ToastContainer component to render the toasts */}
//                 <div className="header">
//                     <h2>Login</h2>
//                 </div>
//                 <div className="box">
//                     <input type="text" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className="box">
//                     <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <p>Don't have an account? <Link to={"/"}>Sign Up</Link></p>
//                 <Link to="/home">
//                     <button onClick={submit}>Login</button>
//                 </Link>
//             </div>
//         </>
//     )
// }

// export default Login;



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
      navigate("/")
    }
    if (!localStorage.getItem("auth")) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          navigate("/")
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
        navigate("/")
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