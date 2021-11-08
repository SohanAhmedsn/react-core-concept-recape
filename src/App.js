import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    <MyComponent brand="Apple" price="
    170000"></MyComponent>
    <MyComponent brand="Microsoft" price="10000"></MyComponent>
    <MyComponent brand="Google" price="0"></MyComponent>
    <MyComponent></MyComponent>
    </div>
  );
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
