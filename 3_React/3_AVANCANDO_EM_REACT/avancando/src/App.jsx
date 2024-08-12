import { useState } from 'react'

// 2 - imagem em assets
import night from './assets/city.jpg'

// 3 - useState
import Data from './components/Data'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App' style={{paddingBottom: '500px'}}>
        <h1>Avançando em React</h1>
        {/* 1 - imagem em public */}
        <img src="/img1.jpg" alt="Alguma imagem" />
        {/* 2 - imagem em assets */}
        <img src={night} alt="Outra imagem" />
        {/* 3 - useState */}
        <Data />
      </div>
    </>
  )
}

export default App
