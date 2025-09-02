// import { Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actgetProductsByCatPrefix, cleanUpProducts } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Products = () => {
  const params = useParams();
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

  return (
    <>
    <Heading title = {`${params.prefix?.toUpperCase()} Products`} />
      <Loading status={loading} error={error}>
        <GridList record={productsInfo} renderItems = {(record) => <Product {...record}/>}>
          </GridList>
      </Loading>
    </>
  );
};

export default Products;