import { useContext, useState } from "react"

import { CounterContext } from "../context/CounterContext"

const ChangeCounter = () => {

    const {counter, setCounter} = useContext(CounterContext)
    const {stringg, setStringg} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        <button onClick={() => setStringg ('Foi clicado!')}>{stringg}</button>
    </div>
  )
}

export default ChangeCounter