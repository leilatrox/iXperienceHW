import React, {useEffect, useState} from 'react'

export default function Clock() {
  const[c1, setC1] = useState(0);
  const[c2, setC2] = useState(0);

  useEffect(() => {
    console.log('conponent did mount');
    return () => {
      console.log('component did unmount');
    }
  })
  
  useEffect(() => {
    console.log('count 1 did update');
  }, [c1]);

  useEffect(() => {
    console.log('count 2 did update');
  }, [c2]);
  
  return (
    <div>
      <h1>Count 1: {c1}</h1>
      <h1>Count 2: {c2}</h1>

      <button onClick={()=> setC1(c1+1)}>
        Add to Count 1
      </button>
      <button onClick={()=> setC2(c2+1)}>
        Add to Count 2
      </button>
      
    </div>
  )
}
