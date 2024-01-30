import React, { useState } from 'react';
import './App.css';
export const App = () => {

  const [input,setInput] = useState(''); 

  const calculateResult=(value)=>{

    let result;
    try
    {
      const operator=['+','-','*','/'];
      let operators = null;
      for(let i=0;i<value.length;i++)
      {
        if(operator.includes(input[i]))
        {
          operators=value[i];
          break;
        }
      }
      if(!operators)
      {
        setInput(parseFloat(input).toString());
        return;
      }
      const [operand1, operand2]=value.split(operators).map(parseFloat);
      switch(operators)
      {
        case '+':
        {
          result=operand1+operand2;
          break;
        }
        case '-':
          {
            result=operand1-operand2;
            break;
          }

        case '*':
        {
          result=operand1*operand2;
          break;
        }
        case '/':
        {
          result=operand1/operand2;
          break;
        }
        default:
        {
          throw new Error('Invalid Operator');
        }
      }
      setInput(result.toString());
    }
    catch(error)
    {
      setInput('Error');

    }
  }

  const handleOperation = (value)=>{

    if(value === 'C')
    {
      setInput('');
    }
    else if(value === '<')
    {
      setInput(input.slice(0,-1));
    }
    else if(value === '=')
    {   
        calculateResult(input);
    }
    else
    {
      setInput((preValue) => preValue+value);
    }
  }

  return (
    <div className='container'>
      <div className='calc'>
        <h1 id='input'>{input}</h1>
        <div classname='btn'>
          <button onClick={()=>
          handleOperation('C')}>C</button>
          <button onClick={()=>
          handleOperation('<')}>&lt;</button>
          <button onClick={()=>
          handleOperation('%')}>%</button>
          <button onClick={()=>
          handleOperation('/')}>/</button>
        </div>
        <div classname='btn'>
          <button onClick={()=>
          handleOperation('7')}>7</button>
          <button onClick={()=>
          handleOperation('8')}>8</button>
          <button onClick={()=>
          handleOperation('9')}>9</button>
          <button onClick={()=>
          handleOperation('*')}>*</button>
        </div>
        <div classname='btn'>
          <button onClick={()=>
          handleOperation('4')}>4</button>
          <button onClick={()=>
          handleOperation('5')}>5</button>
          <button onClick={()=>
          handleOperation('6')}>6</button>
          <button onClick={()=>
          handleOperation('-')}>-</button>
        </div>
        <div classname='btn'>
          <button onClick={()=>
          handleOperation('1')}>1</button>
          <button onClick={()=>
          handleOperation('2')}>2</button>
          <button onClick={()=>
          handleOperation('3')}>3</button>
          <button onClick={()=>
          handleOperation('+')}>+</button>
        </div>
        <div classname='btn'>
          <button onClick={()=>
          handleOperation('0')}>0</button>
          <button onClick={()=>
          handleOperation('00')}>00</button>
          <button onClick={()=>
          handleOperation('.')}>.</button>
          <button onClick={()=>
          handleOperation('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App;