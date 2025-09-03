import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import useWishlist from "@hooks/useWishlist";

const Wishlist = () => {
  const {loading, error, productsFullInfo} = useWishlist();
  return (
    <>
        <Heading title = "Your wishlist" />
        <Loading status={loading} error={error}>
        <GridList record={productsFullInfo} renderItems = {(record) => <Product {...record}/>}>
          </GridList>
      </Loading>
    </>
  )
}

export default Wishlist
