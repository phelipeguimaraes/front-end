import React from 'react'

const ConditionalRender = () => {
    const x = false
    const n = 5
    const nome = 'Phelipe'

  return (
    <div>
        {/* 7 - render condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true sim!</p>}

        <h1>Isso será exibido?</h1>
        {n > 3 && <p>Se n for true sim!</p>}

        <h2>Isso será exibido?</h2>
        {nome == 'Phelipe' && <p>Deu bom</p>}
    </div>
  )
}

export default ConditionalRender