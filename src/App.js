import './App.css';
import Header from './Header';
import Post from './Post';
import SideMenu from './SideMenu';
function App() {
  const posts=[
    {id:1, title:"learning", body:"How do you learning"},
    {id:1, title:"learning2", body:"How do you learning2"},
    {id:1, title:"learning3", body:"How do you learning3"},
    {id:1, title:"learning4", body:"How do you learning4"},
  ];
  
  const PostsList= posts.map((post)=>{
    return <Post key={post.id} title={post.title} body={post.body}/>
  });
  return (
    <div>
      <Header />
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"  }}>
        <div style={{ display: "flex",width:"70%"}}>
          <div style={{ width: "80%" }}>
            {PostsList}
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
