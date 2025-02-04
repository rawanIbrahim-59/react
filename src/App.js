import './App.css';

function App() {
  const tasks=[
    {id:1, title:"Reading"},
    {id:2, title:"Writing"},
    {id:3, title:"Doing your Homeworks"},
    {id:4, title:"Sleeping"},
    {id:4, title:"Visiting"},
  ];

  const MyTaskList = tasks.map((task)=>{
    return <li style={{backgroundColor:"orange" ,width:"100px", padding:"20px" ,margin:"20px", color:"white", fontSize:"20px"}} key={task.id}>{task.title}</li>

  });
  return (
    <div>
      <ul>{MyTaskList}</ul>

    </div>
  );
}

export default App;
