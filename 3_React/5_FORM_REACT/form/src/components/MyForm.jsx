import "./MyForm.css"

import { useState } from "react";

const MyForm = () => {

    // 3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    // 5 - envio de form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name,email)


        // validação
        // envio
    }

    console.log(name, email)

  return (
    <div>
        {/* 1 - Criação de form */}
        {/* 5 - envio de formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                 type="text"
                 name="name" 
                 placeholder="Digite o seu nome"  
                 onChange={handleName}
                 />
            </div>
            
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input
                 type="text" 
                 name="email" 
                 placeholder="Digite o seu e-mail" 
                 // 4 - Simplificando manipulação
                 onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm