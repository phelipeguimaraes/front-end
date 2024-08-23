import { useState } from 'react'

// 2 - imagem em assets
import night from './assets/city.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - renderização de lista
import ListRender from './components/ListRender'

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - desestruturando props
import CarDetails from './components/CarDetails'

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
        {/* 4 - renderização de lista */}
        <ListRender />
        {/* 7 - render condicional */}
        <ConditionalRender />
        {/* 8 - props */}
        <ShowUserName name="Phelipe"/>
        {/* 9 - desestruturando props */}
        <CarDetails brand="VW" km={999} color="Vermelho"/>
      </div>
    </>
  )
}

export default App
