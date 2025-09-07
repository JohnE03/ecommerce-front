import CategorySkeleton from "../skeleton/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeleton/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeleton/CartSkeleton/CartSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";
import TableSkeleton from "../skeleton/TableSkeleton/TableSkeleton";
//for loading images
import type { TLoading } from "@types";

const skeletonTypes = { //dynamic component
    cart: CartSkeleton,
    product: ProductSkeleton,
    category: CategorySkeleton,
    table: TableSkeleton
};

type ILoadingProps = {
    status: TLoading;
    error: string | null;
    children: React.ReactNode; //tells react we will get nodes, .JSX.Element implies a single tag
    // type?: "cart" | "product" | "category"; //we can't keep writing it manually
    type?: keyof typeof skeletonTypes; //returns skeletonTyoes but each value is now a string
}

const Loading = ({status, error, children, type="category"}: ILoadingProps) => {
    const Component = skeletonTypes[type];
    if(status === "pending"){
        return <Component />;
    }
    if(status === "failed"){
        return <div><LottieHandler type="error" message={error as string} /></div>
    }
    return <div>{children}</div>
}

export default Loading
