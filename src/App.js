import './App.css';
import Artical from './Artical';
function App() {
  const firstContent="Lorem ipsum Lorem ipsum 11 "
  const secondContent="Lorem ipsum Lorem ipsum 22 "
  return (
    <div className="App">
      <header className="App-header">
        <Artical name="Ali" email="Ali@gmail.com" content={firstContent}/>
        <Artical name="Ahmad" email="Ahmad@gmail.com"  content={secondContent}/>
        <Artical name="Nour" email="Nour@gmail.com"/>
        <Artical name="Rawan" email="rawan@gmail.com">
          <p style={{color:"red"}}>Lorem ipsum Lorem ipsum</p>
        </Artical>
        <Artical name="Nour22" email="Nour22@gmail.com">
          <p style={{color:"blue"}}>Lorem ipsum Lorem ipsum</p>
        </Artical>
      </header>
    </div>
  );
}

export default App;
