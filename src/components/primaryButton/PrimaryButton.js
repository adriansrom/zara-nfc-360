import React from 'react'
import './PrimaryButton.css'

export default function PrimaryButton({ text, size, onClick, mode }) {
  return (
    <button
      className={`primaryButton ${size} ${mode}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
