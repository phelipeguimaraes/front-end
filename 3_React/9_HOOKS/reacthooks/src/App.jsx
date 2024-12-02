import './App.css'

import { Outlet, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/contact'>Contatos</Link>
      </li>
    </ul>
      <Outlet/>
    </>
  )
}

export default App
