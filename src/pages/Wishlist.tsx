import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetWishlist, WishlistCleanUp } from "@store/wishlist/wishlistSlice";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Wishlist = () => {
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
          dispatch(WishlistCleanUp());
        }
    },[dispatch])
  return (
    <>
        <Heading>Your wishlist</Heading>
        <Loading status={loading} error={error}>
        <GridList record={productsFullInfo} renderItems = {(record) => <Product {...record}/>}>
          </GridList>
      </Loading>
    </>
  )
}

export default Wishlist
