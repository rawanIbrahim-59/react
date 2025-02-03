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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
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
