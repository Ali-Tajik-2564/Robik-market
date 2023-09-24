import ArticlePage from "./pages/ArticlePage/ArticlePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Index from "./pages/index/Index";

const routes = [
    {
        path: "/", element: <Index />,
    },
    {
        path: "/products/:id", element: <ProductPage />,
    },
    {
        path: "/articles/:id", element: <ArticlePage />,
    },
]
export default routes