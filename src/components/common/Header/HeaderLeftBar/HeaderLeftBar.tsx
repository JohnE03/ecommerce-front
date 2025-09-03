import HeaderCounter from '../HeaderCounter/HeaderCounter';
import { useAppSelector } from '@store/hooks';
import WishlistIcon from "@assets/svg/wishlist.svg?react";
import CartIcon from "@assets/svg/cart.svg?react";

import { getCartTotalQuantitySelector } from '@store/cart/cartSlice';
import styles from "./styles.module.css"

const {headerLeftBar} = styles;

const HeaderLeftBar = () => {
    const wishlistTotalQuantity = useAppSelector((state)=>state.wishlist.itemsId.length);
    const cartTotalQuantity = useAppSelector(getCartTotalQuantitySelector);    
  return (
    <div className={headerLeftBar}>
        <HeaderCounter
        to="wishlist"
        title="Your wishlist"
        totalQuantity={wishlistTotalQuantity}
        svgIcon={<WishlistIcon title="wishlist"/>}
    />
    <HeaderCounter
    to="cart"
    title="Your cart"
    totalQuantity={cartTotalQuantity}
    svgIcon={<CartIcon title="cart"/>}
    />
    </div>
  )
}

export default HeaderLeftBar;
