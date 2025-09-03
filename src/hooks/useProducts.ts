import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useParams } from "react-router-dom";
import { actgetProductsByCatPrefix, cleanUpProducts } from "@store/products/productsSlice";
import { useEffect } from "react";

const useProducts = () => {
    const params = useParams();
    const paramPrefix=params.prefix;
    const dispatch = useAppDispatch();
    const {loading, error, records} = useAppSelector((state) => state.products);
    const cartItems = useAppSelector((state)=>state.cart.items);

    const wishListItemsId = useAppSelector((state)=>state.wishlist.itemsId);

    const productsInfo = records.map((el)=>({
        ...el,
        quantity: cartItems[el.id || 0],
        isLiked: wishListItemsId.includes(el.id)
    }));

    useEffect(()=>{
        dispatch(actgetProductsByCatPrefix(params.prefix as string));
        return () => { dispatch(cleanUpProducts()); } //cleanup function to clear previous products when component unmounts
    },[dispatch, params]
  );

  return {loading, error, productsInfo, paramPrefix };
}

export default useProducts;
