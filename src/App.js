import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
    <LoadUsers></LoadUsers>
    <MyComponent brand="Apple" price="170000"></MyComponent>
    <MyComponent brand="Microsoft" price="10000"></MyComponent>
    <MyComponent brand="Google" price="0"></MyComponent>
    <MyComponent></MyComponent>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=> setUsers(data))
  }, [])
  return (
    <div>
      <h1>Load User: {users.length}</h1>
      {
        users.map(user=><User name={user.name} phone={user.phone}></User> )
      }
    </div>
  )
}

function User(props) {
  return (
    <div className="user">
      <h2>Name: {props.name}</h2>
      <p>Call me baby : {props.phone}</p>
    </div>
  )
}

function MyComponent(props){
  console.log(props);
  const [points, setPoints] = useState(1);
  const myStyle={
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '20px',
    padding: '10px',
    borderRadius: '10px'

  }
  const handlePoints = () =>{
    const newPoints = points * 2;
    setPoints(newPoints);
  } 
  return(
    <div style={myStyle}>
      <h1>Brand Name: {props.brand}</h1>
      <p style={{color: 'magenta', fontWeight: 'bold'}}>Brand value: {props.price}, I have a Points: {points} </p>
      <button onClick={handlePoints}>Add Point</button>

    </div>
  )
}
export default App;
