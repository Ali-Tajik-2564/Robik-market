import ProductPage from "./pages/ProductPage/ProductPage";
import Index from "./pages/index/Index";

const routes = [
    {
        path: "/", element: <Index />,
    },
    {
        path: "/products/:id", element: <ProductPage />,
    },
]
export default routes