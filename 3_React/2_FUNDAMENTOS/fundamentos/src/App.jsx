import './App.css'


// 2 - importando componente
import FirstComponent from './components/FirstComponent'

function App() {
  // 3 - comentarios

  return (
    <>
      <div className='App'>
        {/* Comentário JSX */}
        <h1>Fundamentos do React</h1>
        <FirstComponent />
      </div>
    </>
  )
}

export default App
