
// 4 - template expression
function TemplateExpression() {
    const name = 'Phelipe'
    const data = {
        age: 20,
        job: 'Robótica'
    }

  return (
    <div>
        <p>A soma é: {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} anos e você trabalha como {data.job}</p>
    </div>
  )
}

export default TemplateExpression