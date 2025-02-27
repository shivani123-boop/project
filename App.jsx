import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div 
    style={{
      fontFamily: 'Arial, sans-serif', 
      padding: '40px', 
      textAlign: 'center', 
      backgroundColor: 'rgb(110, 101, 118)',  
      backgroundImage: 'url("img.png")', 
      backgroundSize: 'cover',  
      backgroundPosition: 'center',  
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center'
    }}
  >

  
      <h1 
        style={{
          fontSize: '3rem', 
          color: '#333333f', 
          marginBottom: '30px', 
          fontWeight: 'bold',
          textTransform: 'uppercase'
        }}
      >
        Task Manager
      </h1>
      <div 
        style={{
          backgroundColor: '#ffffff', 
          borderRadius: '8px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          padding: '20px', 
          width: '80%', 
          maxWidth: '600px', 
          margin: '0 auto'
        }}
      >
        <Routes>
            <Route path="/HomePage" element={<HomePage />} />
          <Route path="/" element={<TaskPage />} />
        
        </Routes>
      </div>
    </div>
  )
}

export default App
