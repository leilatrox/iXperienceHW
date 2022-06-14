import React, {useEffect, useState} from 'react'

export default function Clock() {
  const[date, setDate] = useState(new Date());
  

  useEffect(() => {
    console.log('componentDidMount + componentDidUpdate')
  });

  useEffect(() => {
    console.log('componentDidMount');
    const id = setInterval(() => {
      setDate(new Date());
      console.log('date updated');
    }, 1000);

    return() => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log('time did update');
  }, [date]);

  
  return (
    <div>
      <h1>The current time is:</h1>

      <h2> {date.toLocaleTimeString()}</h2>

    </div>
  )
}
