import React from 'react'
import './PrimaryButton.css'

export default function PrimaryButton({ text, size, onClick, mode, ariaLabel }) {
  return (
    <button
      aria-label={ariaLabel}
      className={`primaryButton ${size} ${mode}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
