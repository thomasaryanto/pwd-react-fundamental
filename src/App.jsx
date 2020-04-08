import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tom from './views/screens/Tom.jsx';
import TableProducts from './views/components/TableProducts';

function App() {
  let arr = ["Jakarta", "Bandung", "Malang"]

  const renderArr = () => {
    return arr.map((val) => {
      return (
        <>
          <Tom />
          <p>{val}</p>
        </>
      )
    })
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2 style={{border : "1px solid red", marginTop : "10px"}}>test gan</h2>
      <Tom />
      <TableProducts />
    </div>
  );
}

export default App;
