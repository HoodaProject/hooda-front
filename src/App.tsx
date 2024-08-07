import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Menu from './Components/Menu/Menu'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <div className='min-h-[80vh]'>
           <AboutUs />    
      </div>
      
      <Footer />

    </>
  )
}

export default App
