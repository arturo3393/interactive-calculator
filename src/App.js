import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import BtnClear from './components/BtnClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  const calculateResult = () =>{
    if(input){
      if(input.includes('/0')){
        alert('Division by ZERO is not allowed')
        setInput('');
        return;
      }
      setInput(evaluate(input));
    }  else{
      alert('Please enter values to use the calculator');
    } 
  };

  return (
    <div className='App'>
      <div className='calculator-container'>
        <Screen input={input} />
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <BtnClear handleClear={()=>setInput('')}>
            CLEAR
          </BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
