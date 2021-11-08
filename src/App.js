import logo from './logo.svg';
import './App.css';

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
  
  const myStyle={
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '20px',
    padding: '10px'
  }
  return(
    <div style={myStyle}>
      <h1>Brand Name: {props.brand}</h1>
      <p style={{color: 'magenta', fontWeight: 'bold'}}>Brand value: {props.price}</p>

    </div>
  )
}
export default App;
