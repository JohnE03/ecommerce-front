import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../index"

const getCartTotalQuantitySelector = createSelector(//prevents multiple callbacks to the function at rendering time
    (state: RootState)=>state.cart.items,
    (items)=> { //items refer to return of prevous fn
    const totalQuantity= Object.values(items).reduce(
        (acc, current) => {
            return acc+=current
        }, 0
    );
    return totalQuantity;
})

export {getCartTotalQuantitySelector};