import { useState } from "react";

import React from 'react'

const HookUseState = () => {

    // 1 - useState
    let userName = "João"
    const [name, setName] = useState("Phelipe")
    const [age, setAge] = useState(19)

    const changeNames = () => {
        userName = 'Pedro Alves'
        setName("Phelipe Guimarães")
    }

    const changeAge = () => {
        setAge(20)
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <p>useState: {age}</p>

        <button onClick={changeNames}>Mudar nomes</button>
        <button onClick={changeAge}>Mudar idade</button>
    </div>
  )
}

export default HookUseState