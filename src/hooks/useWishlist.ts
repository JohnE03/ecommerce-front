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
        isAuthenticated: true
    }));

    useEffect(()=>{
        const promise = dispatch(actGetWishlist("productsFullInfo"));
        return ()=>{
          dispatch(wishlistCleanUp());
          promise.abort();
        }
    },[dispatch])

  return {loading, error, productsFullInfo}
}

export default useWishlist
