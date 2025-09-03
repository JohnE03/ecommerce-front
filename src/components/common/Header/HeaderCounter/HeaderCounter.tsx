import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useAppSelector } from "@store/hooks";

import styles from './styles.module.css';

type HeaderCounterProps = {totalQuantity: number; title: string; svgIcon: React.ReactNode, to: string};

const {conintaer, totalNum, pumpAnimate, iconWrapper} = styles;

const HeaderCounter = ({totalQuantity, title,  svgIcon, to}: HeaderCounterProps) => {
  const navigation=useNavigate();
  const [isAnimated, setIsAnimated] = useState(false);

  const quantityStyle = `${totalNum} ${isAnimated? pumpAnimate : ''}`;
  useEffect(()=>{
    if(!totalQuantity) return;
    setIsAnimated(true);
    const debounce = setTimeout(()=>{setIsAnimated(false)},300);

    return ()=>clearTimeout(debounce)
  },[totalQuantity]);

  return (
    <div className={conintaer} onClick={()=>navigation(to)}>
      <div className={iconWrapper}> 
        {svgIcon}
        {totalQuantity>0?
        <div className={quantityStyle}>{totalQuantity}</div>: null}
      </div>
      <h3>{title}</h3>
    </div>  
  )
}

export default HeaderCounter;