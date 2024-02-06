import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/helper';

const Demo = () => {

   
        const [text, setText] = useState(0);
        const [isDarkTheme, setIsDarkTheme] = useState(false);

       // console.log("Rendering...")

    //   const prime =findNthPrime(text); 

        const prime = useMemo(() =>   findNthPrime(text),[text]); 
        const v =10;
    
  return (
    <div className={'m-4 p-2 w-96 h-96 border border-black ' + (isDarkTheme && "bg-gray-900 text-white")}>
      <div>
        <button className='m-10 p-2 bg-green-200' onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
      </div>
        <div>
            <input 
            className='border border-black w-72 px-2'
            type="number" 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
        </div>
        <div>
            <h1> nth Prime: {prime}</h1>
        </div>
    </div>
  )
}

export default Demo