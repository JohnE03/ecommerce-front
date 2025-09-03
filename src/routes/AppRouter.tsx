import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//layouts
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
//pages
//to load the pages only when called, makes site faster
const Home = lazy(()=> import('@pages/Home'));
const Wishlist = lazy(()=> import('@pages/Wishlist'));
const Cart = lazy(()=> import('@pages/Cart'));
const Categories = lazy(()=> import('@pages/Categories'));
const Products = lazy(()=> import('@pages/Products'));
const AboutUs = lazy(()=> import('@pages/AboutUs'));
const Login = lazy(()=> import('@pages/Login'));
const Register = lazy(()=> import('@pages/Register'));
const Error = lazy(()=> import('@pages/Error'));

const router = createBrowserRouter([{
    path: "/",
    element:
    <Suspense fallback="loading please wait..">
        <MainLayout />
    </Suspense>,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <Suspense fallback="loading please wait"><Home /></Suspense>
        },
        {
            path: "wishlist",
            element: <Suspense fallback="loading please wait"><Wishlist /></Suspense>
        },
        {
            path: "cart",
            element: <Suspense fallback="loading please wait"><Cart /></Suspense>
        },
        {
            path: "categories",
            element: <Suspense fallback="loading please wait"><Categories /></Suspense>
        },
        {
            path: "products/:prefix",
            element: <Suspense fallback="loading please wait"><Products /></Suspense>,
            loader: ({params}) => {
                if(
                    typeof params.prefix !== "string" ||
                    !/^[a-z]+$/i.test(params.prefix)
                ){
                    throw new Response("Bad Request", {statusText: "Invalid product prefix", status: 400});
                }
                return true;
            }
        },
        {
            path: "about-us",
            element: <Suspense fallback="loading please wait"><AboutUs /></Suspense>
        },
        {
            path: "Login",
            element: <Suspense fallback="loading please wait"><Login /></Suspense>
        },
        {
            path: "Register",
            element: <Suspense fallback="loading please wait"><Register /></Suspense>
        }
    ]
}]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;