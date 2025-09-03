import useProducts from "@hooks/useProducts";
import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Products = () => {
  const {loading, error, productsInfo, paramPrefix} = useProducts();

  return (
    <>
    <Heading title = {`${paramPrefix?.toUpperCase()} Products`} />
      <Loading status={loading} error={error} type="product">
        <GridList record={productsInfo} renderItems = {(record) => <Product {...record}/>}>
          </GridList>
      </Loading>
    </>
  );
};

export default Products;