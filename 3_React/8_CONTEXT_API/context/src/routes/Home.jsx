// 3 - Alterando o valor do contexto
//import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"

// import {CounterContext} from "../context/CounterContext"

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {  

  // const {counter} = useContext(CounterContext)

  const {counter} = useCounterContext()

  const {color, dispatch} = useTitleColorContext()

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p>Valor do contador : {counter}</p>
        <ChangeCounter />

        {/* 6 - Alterando contexto complexo */}
        <div>
          <button onClick={() => setTitleColor("RED")}>Vermelho</button>
          <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>
    </div>
  )
}

export default Home