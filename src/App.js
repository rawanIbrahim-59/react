import './App.css';
import Artical from './Artical';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Artical name="Ali" email="Ali@gmail.com"/>
        <Artical name="Ahmad" email="Ahmad@gmail.com"/>
        <Artical name="Nour" email="Nour@gmail.com"/>
        <Artical name="Rawan" email="Rawan@gmail.com"/>
      </header>
    </div>
  );
}

export default App;
