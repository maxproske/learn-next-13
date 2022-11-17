'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>{count}</button>
    </div>
  )
}
