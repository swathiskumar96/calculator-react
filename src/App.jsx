import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')

  const clearInput = () => {
    setInput("")
  }

  const handleButton = (value) => {
    setInput((preInput) => preInput + value)
  }

  const handleDelete = () => {
    setInput((preInput) => preInput.slice(0, -1))
  }

  const calculate = () => {
    try {
      const result = eval(input)
      setInput(result.toString())
    } catch (error) {
      setInput("Error")
    }
  }

  return (
    <>
      <div className='bgbody'>
        <div className='calbody container mt-5'>

          <h1><input value={input} className='mt-3 rounded bg-black text-white' style={{ width: '275px', height: '75px' }} readOnly /></h1>

          <div className='row mt-1'>
            <div className='col'>
              <button onClick={clearInput} className='ac'>AC</button>
              <button onClick={handleDelete}>DEL</button>
              <button onClick={() => handleButton('/')}>/</button>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <button onClick={() => handleButton('7')}>7</button>
              <button onClick={() => handleButton('8')}>8</button>
              <button onClick={() => handleButton('9')}>9</button>
              <button onClick={() => handleButton('*')}>*</button>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <button onClick={() => handleButton('4')}>4</button>
              <button onClick={() => handleButton('5')}>5</button>
              <button onClick={() => handleButton('6')}>6</button>
              <button onClick={() => handleButton('+')}>+</button>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <button onClick={() => handleButton('1')}>1</button>
              <button onClick={() => handleButton('2')}>2</button>
              <button onClick={() => handleButton('3')}>3</button>
              <button onClick={() => handleButton('-')}>-</button>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <button onClick={() => handleButton('0')}>0</button>
              <button onClick={() => handleButton('.')}>.</button>
              <button onClick={calculate} className='eq'>=</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
