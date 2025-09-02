import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useAppSelector } from "@store/hooks";
import Logo from "../../../assets/svg/wishlist.svg?react";

import styles from './styles.module.css';
import { useAppSelector } from "@store/hooks";

const {conintaer, totalNum, pumpAnimate, iconWrapper} = styles;

export default function HeaderWishlist() {
  const navigation=useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  
  const totalQuantity = useAppSelector((state)=>state.wishlist.itemsId);
  const quantityStyle = `${totalNum} ${isAnimated? pumpAnimate : ''}`;
  useEffect(()=>{
    if(!totalQuantity) return;
    setIsAnimated(true);
    const debounce = setTimeout(()=>{setIsAnimated(false)},300);

    return ()=>clearTimeout(debounce)
  },[totalQuantity]);

  return (
    <div className={conintaer} onClick={()=>navigation("/wishlist")}>
      <div className={iconWrapper}>
        <Logo title="basket icon" />
        {totalQuantity.length>0?
        <div className={quantityStyle}>{totalQuantity.length}</div>: null}
      </div>
      <h3>wishlist</h3>
    </div>  
  )
}
