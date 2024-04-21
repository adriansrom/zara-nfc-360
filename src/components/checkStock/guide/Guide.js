import React from 'react'
import PrimaryButton from '../../primaryButton/PrimaryButton'
import './Guide.css'

export default function Guide({onClickBack}) {
  return (
    <div className='guideContainer'>
      <div className='guideBackBtn'>
        <button className='dark' onClick={onClickBack}>
          <svg width="30" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.295 19.716a1 1 0 0 0 1.404-1.425l-5.37-5.29h13.67a1 1 0 1 0 0-2H6.336L11.7 5.714a1 1 0 0 0-1.404-1.424l-6.924 6.822a1.25 1.25 0 0 0 0 1.78l6.924 6.823Z" fill="#ffffff"/></svg>
        </button>
      </div>
      <img src="assets/images/mapa-tienda.png" alt="mapa tienda"/>
      <div className='guideBtn'>
        <PrimaryButton text='AYUDA' size='small' onClick={() => alert("Alguien de personal de tienda acudira a ayudarle en breve.")} mode='dark' />
      </div>
    </div>
  )
}
