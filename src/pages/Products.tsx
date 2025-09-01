import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actgetProductsByCatPrefix, productsCleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";

const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.products);

  useEffect(()=>{
    dispatch(actgetProductsByCatPrefix(params.prefix as string));
    return () => { dispatch(productsCleanUp()); } //cleanup function to clear previous products when component unmounts
  },[dispatch, params]
  );

  const productsList = records.length > 0 ? records.map((product) => 
  (<Col xs={3} key={product.id} className="d-flex justify-content-center mb-5 mt-2">
    <Product {...product} />
  </Col>)
  )
  : "there are no categories";

  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>
          {productsList}
        </Row>
      </Loading>
    </Container>
  );
};

export default Products;