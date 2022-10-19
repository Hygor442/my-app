import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';

function App() {
  const nome = 'Maria'
  return (
    <div className="App">
      <HelloWord/>
      <SayMyName nome={nome}/>
    </div>
  );
}

export default App;
