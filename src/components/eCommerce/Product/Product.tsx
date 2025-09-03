import { useEffect, useState, memo } from "react";
import { useAppDispatch } from "@store/hooks";
import { actLikeToggle } from "@store/wishlist/wishlistSlice";
import { addToCart } from "@store/cart/cartSlice";
import { Button, Spinner } from "react-bootstrap";
import Like from "@assets/svg/like.svg?react";
import LikeFill from "@assets/svg/like-fill.svg?react";
import type { TProduct } from "@types";

import styles from "./styles.module.css";
const { product, productImg, maximumNotice, wishlistBtn } = styles;

const Product = memo(({id, title, price, img, max, quantity, isLiked}: TProduct ) => {
  const dispatch = useAppDispatch();
  const [isBtnDisable, setBtnDisabled]=useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentRemainingQuantity = max - (quantity ?? 0); //if null or undef or ... take the specified value
  const maxQuantityReached = currentRemainingQuantity <= 0 ? true : false;

  useEffect(()=>{
    if(!isBtnDisable) return;

    setBtnDisabled(true);
    const debounce = setTimeout(()=>{
      setBtnDisabled(false);
    },300)

    return ()=>clearTimeout(debounce);
  },[isBtnDisable]);

  const addToCartHandler = () =>{
    dispatch(addToCart(id))
    setBtnDisabled(true)
  }

  const likeToggleHandler = ()=>{
    if(isLoading) return;
    setIsLoading(true);
    dispatch(actLikeToggle(id)).unwrap().then(()=>setIsLoading(false)).catch(()=>setIsLoading(false));
  };

  return (
    <div className={product}>
      <div className={wishlistBtn} onClick={likeToggleHandler}>
        {isLoading? (<Spinner animation="border" size="sm" variant="primary"/>):( isLiked? <LikeFill />: <Like /> )}
      </div>
      <div className={productImg}>
        <img
          src= {img}
          alt= {title}
        />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price.toFixed(2)} EGP</h3>
      <p className={maximumNotice}>{maxQuantityReached? "Max limit reached": `You can add ${currentRemainingQuantity} item(s)`}</p>
      <Button variant="info" style={{ color: "white" }} onClick={addToCartHandler} disabled={isBtnDisable || maxQuantityReached}>
        {isBtnDisable? <><Spinner animation="border" size="sm" />Loading....</>: "Add to cart"}
      </Button>
    </div>
  );
});

export default Product;