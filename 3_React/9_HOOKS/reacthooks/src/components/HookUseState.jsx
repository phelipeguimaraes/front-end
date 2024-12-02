import { useState } from "react";

import React from 'react'

const HookUseState = () => {

    // 1 - useState
    let userName = "João"
    const [name, setName] = useState("Phelipe")
    //const [age, setAge] = useState(19)

    const changeNames = () => {
        userName = 'Pedro Alves'
        setName("Phelipe Guimarães")
    }

    //const changeAge = () => {
    //    setAge(20)
    //}

    // 2 - useState e input
    const [age, setAge] = useState(19)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age)
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>

        <button onClick={changeNames}>Mudar nomes</button>
        {/*<button onClick={changeAge}>Mudar idade</button>*/}

        {/* 2 - useState e input */}
        <form onSubmit={handleSubmit}>
            <input
              type="text" 
              value={age} 
              onChange={(e) => setAge(e.target.value)}
            />
            <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {age} anos.</p>
        <hr />
    </div>
  )
}

export default HookUseState