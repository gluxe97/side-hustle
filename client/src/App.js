import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [users,setUsers]=useState("");

  useEffect(()=>{fetch("http://localhost:3000/users")
  .then(r => r.json())
  .then(users => setUsers(users))},[])

  console.log(users);
  return (
    <div className="App">
      <header className="App-header"/>
      <h1>APP</h1>
    </div>
  );
}

export default App;
