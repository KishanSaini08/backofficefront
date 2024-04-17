import React, { useEffect, useState } from 'react'
// import firebase from '../firebase.js'
import axios from 'axios'
import "../styles/user.css"

function User(user) {
    const [userData , setUserData] = useState([])
    // const [currentUser , setCurrentUser] = useState("")
    const API = "https://backofficeback.onrender.com"
    
    useEffect(()=>{
        axios.get(API+"/api/users").then((res)=>{
            setUserData(res.data)
        }).catch((err) => {
            console.log(err)
        }) 
    },[])

        console.log(userData)

  return (
    <div className='userData'>
        <table>
       <thead>
            <tr>
                <th>User Id</th>
                <th>Email</th>
                <th>Password</th>
                <th>SignUp Time</th>
            </tr>
        </thead>
        <tbody>

            {
                userData.map((user , index)=>{
                  return
                    
                    return(
                        <tr key={index}>
                            <td>{user.uid}</td>
                            <td>{user.email}</td>
                            <td>{user.passwordHash}</td>
                            <td>{user.metadata.creationTime}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default User

