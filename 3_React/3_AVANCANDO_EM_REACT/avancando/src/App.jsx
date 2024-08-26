import { Children, useState } from 'react'

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

// 11 - renderização de listas com componentes
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 200000},
  {id: 3, brand: "Renault", color: "Azul", km: 32000}
]

// 12 - fragments
import Fragment from './components/Fragment'

// 13 - children
import Container from './components/Container'

// 14 - funcao em prop
import ExecuteFunction from './components/ExecuteFunction'

import Peoplee from './components/Peoplee'
const people = [
  {id:1, name: "Phelipe", age:20, job:"Programador"},
  {id:2, name: "Iury", age:23, job:"Servente"},
  {id:3, name: "Dudu", age:19, job:"Jogador"}
]

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  // 14 - funcao em prop
  function showMessage() {
    console.log("Evento do componente pai")
  }

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
        {/* 10 - reaproveitamento de componentes */}
        <CarDetails brand="Fiat" km={982457} color="Branco"/>
        <CarDetails km={340523} color="Azul" brand="Audi"/>

        {/*11 - renderização de listas com componentes */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
        ))}
        
        {people.map((person) => (
          <Peoplee key={person.id} name={person.name} age={person.age} job={person.job}/>
        ))}

        {/* 11 - Fragments */}
        <Fragment />

        {/* 12 - Children */}
        <Container>
          <p>Alguma coisa</p>
        </Container>
        <Container>
        <h2>Teste</h2>
        <p>Meu componente</p>
        </Container>

        {/* 14 - funcao em prop */}
        <ExecuteFunction myFunction={showMessage}/>

      </div>
    </>
  )
}

export default App
