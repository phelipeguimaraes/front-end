import { useState } from 'react'

// 2 - imagem em assets
import night from './assets/city.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="/img1.jpg" alt="Alguma imagem" />
        {/* 2 - imagem em assets */}
        <img src={night} alt="Outra imagem" />
      </div>
    </>
  )
}

export default App
