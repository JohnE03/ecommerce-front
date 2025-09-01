import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actgetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.products);

  useEffect(()=>{
    dispatch(actgetProductsByCatPrefix(params.prefix as string));
    return () => { dispatch(productsCleanUp()); } //cleanup function to clear previous products when component unmounts
  },[dispatch, params]
  );

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList record={records} renderItems = {(record) => <Product {...record}/>}>
          </GridList>
      </Loading>
    </Container>
  );
};

export default Products;