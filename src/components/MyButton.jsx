import React from 'react'

export default function MyButton({ count, handleButton }) {
    return (
    <button style={{
        fontSize:"1.5rem"
    }} onClick={handleButton}>Increment Me! {count}</button>
  )
}

