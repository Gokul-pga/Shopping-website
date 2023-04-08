import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Website from './layout/Website';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Website' element={<Website/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;