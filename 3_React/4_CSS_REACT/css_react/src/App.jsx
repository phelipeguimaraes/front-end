import './App.css'
// 2 - css do componente
import MyComponent from './components/MyComponent'

function App() {
  return (
    <>
      <div>
        
        {/* 1 -  CSS Global */}
        <h1>CSS no React</h1>

        {/* 2 - css de componente */}
        <MyComponent/>
        <p>Pegou o CSS do componente</p>

        {/* 3 - inline style */}
        <p style={{color: 'blue', padding: '20px', borderTop: '1px dotted blue'}}>Este elemento tem estilos inline</p>
      </div>
    </>
  )
}

export default App
