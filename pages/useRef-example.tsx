import React, { useEffect, useRef, useState } from 'react'

const UseRefExample = () => {
    const[inputArr, setInputArr] = useState<Array<string>>([])
    const inputRef  =useRef(null)

    useEffect(()=>{
        if(inputRef.current){
            (inputRef.current as HTMLElement).focus()
        }
    }, [inputArr.length, inputRef.current])
  return (
    <div>
        <div>
            {inputArr.map((inputElem,index)=><input key={index} className="text-black" type={"text"} value={inputElem} onChange={(e)=>{
                const newArr = inputArr.map((inputElem, indexElem)=>{
                    if(indexElem===index){
                        return e.target.value
                    }
                    return inputElem
                })

                setInputArr([...newArr])
            }} 
            ref={inputRef}
            />)}
        </div>
        <button onClick={()=>{
            const newArr = [...inputArr, ""]
            setInputArr([...newArr])
        }}>Add</button>
    </div>
  )
}

export default UseRefExample