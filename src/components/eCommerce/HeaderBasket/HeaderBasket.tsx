import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
import { useAppSelector } from "@store/hooks";
import Logo from "@assets/svg/cart.svg?react";

import styles from './styles.module.css';

const {conintaer, totalNum, pumpAnimate, iconWrapper} = styles;

export default function HeaderBasket() {
  const navigation=useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  //const items = useAppSelector(state => state.cart.items);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);
  const quanittyStyle = `${totalNum} ${isAnimated? pumpAnimate : ''}`;
  useEffect(()=>{
    if(!totalQuantity) return;
    setIsAnimated(true);
    const debounce = setTimeout(()=>{setIsAnimated(false)},300);

    return ()=>clearTimeout(debounce)
  },[totalQuantity]);

  return (
    <div className={conintaer} onClick={()=>navigation("/cart")}>
      <div className={iconWrapper}>
        <Logo title="basket icon" />
        {totalQuantity>0?
          <div className={quanittyStyle}>{totalQuantity}</div>: null}
      </div>
      <h3>cart</h3>
    </div>  
  )
}
