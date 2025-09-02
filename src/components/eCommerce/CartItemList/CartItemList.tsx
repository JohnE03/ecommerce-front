import CartItem from "../CartItem/CartItem";
import type { TProduct } from "@customTypes/product";

type CartItemProps = {products: TProduct[]};

const CartItemList = ({products}: CartItemProps) => {
    const renderList = products.map(el=><CartItem key={el.id} {...el} />);
    return (
        <div>{renderList}</div>
    )
}

export default CartItemList;
