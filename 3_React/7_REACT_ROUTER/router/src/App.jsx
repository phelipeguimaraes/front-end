import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - link entre paginas
import Navbar from './components/Navbar'

// 9 - search 
import SearchForm from './components/SearchForm'

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <SearchForm />
        <Outlet/>
        <p>Footer</p>
      </div>
    </>
  )
}

export default App
