import './App.css'
import Footer from './Components/Footer/Footer'
import Menu from './Components/Menu/Menu'
import Home from './Pages/Home/Home'

function App() {

  return (
    <>
      <Menu />
      <div className='min-h-[80vh]'>
           <Home 
           />    
      </div>
      
      <Footer />

    </>
  )
}

export default App
