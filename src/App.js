import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
function App() {
  return (
    <div>
      <Header />
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"  }}>
        <div style={{ display: "flex",width:"70%"}}>
          <div style={{ width: "80%" }}>
            <Post title="learning" body="How do you learning"/>
            <Post title="learning2" body="How do you learning2" />
            <Post />
            <Post title="learning22" body="How do you learning22" />
            <Post />
            <Post  title="learning222" body="How do you learning222"/>
            
          </div>
          <div>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
