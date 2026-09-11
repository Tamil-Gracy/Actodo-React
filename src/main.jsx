import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
const Main = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'tamil',
      password: '123'
    }
  ])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers={setUsers} />}></Route>
        <Route path='/signup' element={<Signup users={users} setusers={setUsers} />}></Route>
        <Route path='/dashboard' element={<App users={users} setusers={setUsers} />}></Route>
      </Routes>
    </BrowserRouter>
  )

}

createRoot(document.getElementById('root')).render(<Main />)

