import React from 'react'

export default function MyButton({ count, handleButton }) {
  return (
    <button onClick={handleButton}>Increment Me! {count}</button>
  )
}
