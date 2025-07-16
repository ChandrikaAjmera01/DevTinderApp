import React from 'react';
import './App.css'
import NavBar from './component/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';
import Body from './component/Body';

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
     <Routes>
      <Route path="/" element={<Body></Body>}>
        <Route path="/login" element={<h1>Login Page</h1>}></Route>
        <Route path="/connections" element={<h1>Connections Page</h1>}></Route>
        <Route path="/profile" element={<h1>Profile Page</h1>}> </Route>
        <Route path="/feed" element={<h1>Feed Page</h1>}></Route>
       </Route>
     </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
