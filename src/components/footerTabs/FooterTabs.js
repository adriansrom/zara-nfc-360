import React from 'react';
import { useNavigate } from "react-router-dom";
import { useShopCart } from '../../store/cart/shopCart';
import './FooterTabs.css';

export default function FooterTabs() {
  const shopCart = useShopCart((store) => store.shopCart);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className='footerTabsContainer'>
      <ul>
        <li>
          <button className='selected' onClick={handleClick}>INICIO</button>
        </li>
        <li>
          <button>MENU</button>
        </li>
        <li>
          <button>CUENTA</button>
        </li>
        <li>
          <button>CESTA ({shopCart.length})</button>
        </li>
      </ul>
    </div>
  )
}
