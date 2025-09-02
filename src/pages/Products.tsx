// import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actgetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state)=>state.cart.items);

  const wishListItemsId = useAppSelector((state)=>state.wishlist.itemsId);

  const productsFullInfo = records.map((el)=>({
    ...el,
    quantity: cartItems[el.id || 0],
    isLiked: wishListItemsId.includes(el.id)
  }));

  useEffect(()=>{
    dispatch(actgetProductsByCatPrefix(params.prefix as string));
    return () => { dispatch(productsCleanUp()); } //cleanup function to clear previous products when component unmounts
  },[dispatch, params]
  );

  return (
    <>
    <Heading><span className="text-capitalize">{params.prefix} </span>Product</Heading>
      <Loading status={loading} error={error}>
        <GridList record={productsFullInfo} renderItems = {(record) => <Product {...record}/>}>
          </GridList>
      </Loading>
    </>
  );
};

export default Products;