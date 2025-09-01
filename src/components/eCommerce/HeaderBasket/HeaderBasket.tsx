import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import { useAppSelector } from "@store/hooks";
import Logo from "../../../assets/svg/cart.svg?react";
import styles from './styles.module.css';

const {basketContainer, basketQuantity} = styles;

export default function HeaderBasket() {
  //const items = useAppSelector(state => state.cart.items);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>  
  )
}
