
import { Heading } from '@components/common'
import { Loading } from '@components/feedback'
import { CartItemList, CartSubtotalPrice } from '@components/eCommerce'
import useCart from '@hooks/useCart'

const Cart = () => {
    const {loading, error, products, changeQuantityHandler, removeItemHandler} = useCart();

    return (
        <>
            <Heading title="Cart" />
            <Loading status={loading} error={error} type="cart">
                
                {products.length?( <>
                    <CartItemList products={products} changeQuantityHandler={changeQuantityHandler} removeItemHandler={removeItemHandler}/>
                    <CartSubtotalPrice products={products}/>
                </>
                ): ("Your cart is empty")}
            </Loading>
        </>
    )
}

export default Cart
