import React, { useState } from 'react'

function App() {
  const[display, setDisplay] = useState(0)

  const handleNumber = (e) => {
    const number = e.target.textContent;
    if(display == 0){
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }

  const handleOpereator = (e) => {
    const operator = e.target.textContent;
    if(display == 0 && operator != '-') {
      setDisplay(0)
    } else {
      setDisplay(display + ' ' + operator + ' ')
    }
  }

  const calculate = () => {
    if(display == 0) {
      setDisplay(0);
    } else {
      setDisplay(eval(display))
    }
  }

  const handleDecimal = () => {
    const arr = display.split(' ')
    const lastElement = arr[arr.length - 1];

    if(!lastElement.includes('.')) {
      setDisplay(display + '.')
    }
  }
  
  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <div className='ring ring-red-600 rounded-lg p-2 max-w-64'>
        <div id='display' className='border mb-2 bg-zinc-50 font-bold text-red-600 text-4xl p-2 text-end overflow-scroll rounded-lg'>
          {display}
        </div>
        <div className='grid grid-cols-4 gap-2 font-bold text-xl'>
          <div className='col-span-2'></div>
          <div id='clear' className='col-span-2 border p-2 bg-red-600 text-slate-50 text-center rounded-lg shadow-lg active:shadow-none active:bg-red-700' onClick={() => {setDisplay(0)}}>AC</div>
          <div id='nine' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>9</div>
          <div id='eight' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>8</div>
          <div id='seven' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>7</div>
          <div id='multiply' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleOpereator}>*</div>
          <div id='six' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>6</div>
          <div id='five' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>5</div>
          <div id='four' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>4</div>
          <div id='divide' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleOpereator}>/</div>
          <div id='three' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>3</div>
          <div id='two' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>2</div>
          <div id='one' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>1</div>
          <div id='subtract' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleOpereator}>-</div>
          <div id='zero' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleNumber}>0</div>
          <div id='decimal' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleDecimal}>.</div>
          <div id='add' className='border border-red-600 rounded-lg p-5 active:bg-red-600 active:text-slate-50 transition-all' onClick={handleOpereator}>+</div>
          <div id='equals' className='border p-5 bg-red-600 text-slate-50 text-center rounded-lg shadow-lg active:shadow-none active:bg-red-700' onClick={calculate}>=</div>
        </div>
      </div>
    </div>
  )
}

export default App
