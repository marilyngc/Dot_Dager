import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'

import MainContent from './components/MainContext.jsx/MainContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <div>
    
      <MainContent />
    
    </div>
    </>
  )
}

export default App
