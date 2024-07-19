import React, { useState } from 'react'

export default function Vidu1() {
    const [name, setName] = useState("");

  return (
    <div>
      <h1>Thây đổi name: {name}</h1>
      <input type='text' placeholder='Hãy nhập name' onChange={(e) => (setName(e.target.value))}/>
      <hr></hr>
    </div>
  )
}
