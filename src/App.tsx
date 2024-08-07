import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Menu from './Components/Menu/Menu'
import Home from './Pages/Home/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <div className='min-h-[80vh]'>
           <Home />    
      </div>
      
      <Footer />

    </>
  )
}

export default App
