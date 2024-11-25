// 3 - Alterando o valor do contexto
import { useContext } from "react"
import {CounterContext} from "../context/CounterContext"

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

const Contact = () => {

  const {counter} = useCounterContext()

  return (
    <div>
        <h1>Página de contato</h1>
        <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Contact