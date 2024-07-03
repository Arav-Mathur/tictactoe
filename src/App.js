import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
export default function App() {
  
  return (
    <div className="App">
      <Grid/>
    </div>
  );
}
function Box({value, onMyClick}){

  return(
    <button className='square' onClick={onMyClick}>{value}</button>
  );
}
function Grid(){
  
  const [square,setSquare] = useState(Array(9).fill(null))
  const [xNext, setXNext] = useState(true)
  function handleClick(i){
    if(square[i] || calcWin(square)){
      done =  "Winner is " + calcWin(square)
    } else {
      done = "Next player is " + (xNext?"X":"O")
      const nextSquares = square.slice()
      nextSquares[i] = (xNext?"X":"O")
      setSquare(nextSquares)
      console.log(nextSquares)
      setXNext(!xNext)
    }
  }
  let done;
  if(calcWin(square)){
    done =  "Winner is " + calcWin(square)
  } else {
    done = "Next player is " + (xNext?"X":"O")
  }
  return(
    <div>
      {console.log(done)}
      <div><p>{done}</p></div>
      <div>
        <Box value = {square[0]} onMyClick={()=>handleClick(0)}/>
        <Box value = {square[1]} onMyClick={()=>handleClick(1)}/>
        <Box value = {square[2]} onMyClick={()=>handleClick(2)}/>
      </div>
      <div>
        <Box value = {square[3]} onMyClick={()=>handleClick(3)}/>
        <Box value = {square[4]} onMyClick={()=>handleClick(4)}/>
        <Box value = {square[5]} onMyClick={()=>handleClick(5)}/>
      </div>
      <div>
        <Box value = {square[6]} onMyClick={()=>handleClick(6)}/>
        <Box value = {square[7]} onMyClick={()=>handleClick(7)}/>
        <Box value = {square[8]} onMyClick={()=>handleClick(8)}/>
      </div>
      
    </div>
  );
}

function calcWin(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i=0;i<lines.length;i++){
    const [a,b,c] = lines[i]
    if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c])
  {
    return squares[a]
  }
}
return null
}