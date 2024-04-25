import React from 'react';
import './CustomSelector.css';

export default function CustomSelector({ type, content, action, selected }) {
  const isSelected = selected && selected.code === content.code;

  return (
    <div className={`customSelector ${isSelected ? 'active' : ''}`}>
      {
        type === 'SIZE' ? (
          <button  aria-label={!selected ? "Talla " + content.value.toLowerCase() : "Talla " + content.value.toLowerCase() + ". Talla " + selected.value + " seleccionada"} className='size' onClick={() => action(content)}>{content.value}</button>
        ) : (
          <button aria-label={!selected ? content.name : content.name + ". " + selected.name + " seleccionado"} onClick={() => action(content)} style={{backgroundColor: content.value}} ></button>
        )
      }
    </ div>
  )
}
