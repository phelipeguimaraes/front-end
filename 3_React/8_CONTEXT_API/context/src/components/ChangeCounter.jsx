import { useContext, useState } from "react"

import { CounterContext } from "../context/CounterContext"

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

const ChangeCounter = () => {

    const {counter, setCounter} = useCounterContext()
    const {stringg, setStringg} = useCounterContext()

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        <button onClick={() => setStringg ('Foi clicado!')}>{stringg}</button>
    </div>
  )
}

export default ChangeCounter