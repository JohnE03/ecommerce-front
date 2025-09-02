import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import { useAppSelector } from "@store/hooks";
import Logo from "../../../assets/svg/cart.svg?react";

import styles from './styles.module.css';

const {basketContainer, basketQuantity, pumpCartQuantity, basketCart} = styles;

export default function HeaderBasket() {
  const navigation=useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  //const items = useAppSelector(state => state.cart.items);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quanittyStyle = `${basketQuantity} ${isAnimated? pumpCartQuantity : ''}`;
  useEffect(()=>{
    if(!totalQuantity) return;
    setIsAnimated(true);
    const debounce = setTimeout(()=>{setIsAnimated(false)},300);

    return ()=>clearTimeout(debounce)
  },[totalQuantity]);

  return (
    <div className={basketContainer} onClick={()=>navigation("/cart")}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div className={quanittyStyle}>{totalQuantity}</div>
      </div>
      <h3>cart</h3>
    </div>  
  )
}
