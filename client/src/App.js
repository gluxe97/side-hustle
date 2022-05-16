import {useState, useEffect} from 'react';
import Navbar from './Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [users,setUsers]=useState("");

  useEffect(()=>{fetch("http://localhost:3000/users")
  .then(r => r.json())
  .then(users => setUsers(users))},[])

  console.log(users);
  return (
    <div className="App">
      <Navbar/>
      <div id="main-container">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
