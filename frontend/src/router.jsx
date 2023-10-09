import Basket from "./component/Basket/Basket";
import BasketFactor from "./component/Basket/BasketFactor";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import Login from "./pages/Login/Login";
import Market from "./pages/Market/Market";
import ProductPage from "./pages/ProductPage/ProductPage";
import Register from "./pages/Register/Register";
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
    {
        path: "/user-basket", element: <Basket />,
    },
    {
        path: "/factor", element: <BasketFactor />,
    },
    {
        path: "/market", element: <Market />,
    },
    {
        path: "/register", element: <Register />,
    },
    {
        path: "/login", element: <Login />,
    },
]
export default routes