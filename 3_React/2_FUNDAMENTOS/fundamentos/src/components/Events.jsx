import React from 'react'

const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log('executou')
    }

    // 8 - Função de renderização
    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderuzando outra coisa!</h1>
        }
    }

    // return 10 > 11 && <p>Carregando...</p>

  return (
    <div>
        <div>
            <button onClick={() => alert("Testando minha aplicação")}>Clique aqui</button>
        </div>
        {/* 7 - evento com função */}
        <div>
            <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
        {/* 8 - Função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events