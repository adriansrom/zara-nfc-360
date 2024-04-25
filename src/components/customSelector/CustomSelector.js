import React from 'react';
import './CustomSelector.css';

export default function CustomSelector({ type, content, action, selected }) {
  const isSelected = selected && selected.code === content.code;

  return (
    <div className={`customSelector ${isSelected ? 'active' : ''}`}>
      {
        type === 'SIZE' ? (
          <button aria-label={content.value} className='size' onClick={() => action(content)}>{content.value}</button>
        ) : (
          <button aria-label={content.name} onClick={() => action(content)} style={{backgroundColor: content.value}} ></button>
        )
      }
    </ div>
  )
}
