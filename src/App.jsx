import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './styles.css'

export default function App(){
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [toggleSidebar, setToggleSidebar] = useState(() => localStorage.getItem('sidebar') || 'false')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  if(!user){
    return <Login onLogin={(u)=>setUser(u)} />
  }
  return <Dashboard onLogout={()=>setUser(null)} theme={theme} setTheme={setTheme} />
}
