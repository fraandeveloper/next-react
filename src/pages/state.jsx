import {useState} from 'react';

export default function State() {
  const [number, updateNumber] = useState(1)

  function setIncremeta() {
    console.log('incre')
    updateNumber(number + 1);
    // number += 1;
  }
  return (
    <div>
      <p>{ number }</p>
      <button onClick={setIncremeta}>Incremnta</button>
    </div>
  )
}