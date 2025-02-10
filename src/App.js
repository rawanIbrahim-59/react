import './App.css';
import {useState} from 'react';
function App() {
  const [AddDevice, setAddDevice]= useState("");
  const [Devices, setDevices]=useState(["Mac", "iPhone", "Samsung",])
  const deviceList = Devices.map((device)=>{
    return <li>{device}</li>
  })
  function HandelClick(){
    const newDevice = [...Devices];
    newDevice.push(AddDevice);
    setDevices(newDevice);
  }
  return (
    <div style={{padding:"20px"}}>
      {deviceList}
      <div>
        <input value={AddDevice} onChange={(event)=>{
          setAddDevice(event.target.value)
        }} />
        <button onClick={HandelClick}>Add</button>
      </div>
    </div>
  );
}

export default App;
