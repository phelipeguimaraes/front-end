import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - link entre paginas
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <p>Navbar</p>
        <Outlet/>
        <p>Footer</p>
      </div>
    </>
  )
}

export default App
