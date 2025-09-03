import { useAppDispatch, useAppSelector } from '@store/hooks';
import { actGetWishlist, wishlistCleanUp } from '@store/wishlist/wishlistSlice';
import { useEffect } from 'react'

const useWishlist = () => {
    const dispatch = useAppDispatch();
    const {loading, error, productsInfo} = useAppSelector((state) => state.wishlist);
    const cartItems = useAppSelector((state)=>state.cart.items);

    const productsFullInfo = productsInfo.map((el)=>({
        ...el,
        quantity: cartItems[el.id || 0],
        isLiked: true,
    }));

    useEffect(()=>{
        dispatch(actGetWishlist());
        return ()=>{
          dispatch(wishlistCleanUp());
        }
    },[dispatch])

  return {loading, error, productsFullInfo}
}

export default useWishlist
