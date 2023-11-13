import Basket from "./component/Basket/Basket";
import BasketFactor from "./component/Basket/BasketFactor";
import ArticleList from "./pages/ArticlePage/ArticleList";
import ArticlePage from "./pages/ArticlePage/ArticlePage";
import Login from "./pages/Login/Login";
import Market from "./pages/Market/Market";
import ProductPage from "./pages/ProductPage/ProductPage";
import Register from "./pages/Register/Register";
import Index from "./pages/index/Index";
import UserIndex from "./pages/userIndex/userIndex";
import MainIndex from "./component/UserPanel/MainIndex";
import UserEditInfo from "./component/UserPanel/UserEditInfo";
import UserAddress from "./component/UserPanel/UserAddress";
import AdminIndex from "./pages/AdminPanel/AdminIndex";
import AdminMainPage from "./pages/AdminPanel/AdminMainPage";
import AdminUsers from "./pages/AdminPanel/AdminUsers/AdminUsers";
import AdminProduct from "./pages/AdminPanel/AdminProduct/AdminProduct";
import AdminArticles from "./pages/AdminPanel/AdminArticles/AdminArticles";
import AdminOrders from "./pages/AdminPanel/AdminOrders/AdminOrders";
import AdminComments from "./pages/AdminPanel/AdminComments/AdminComments";

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
    {
        path: "/articleList", element: <ArticleList />,
    },
    {
        path: "/admin-panel/*", element: <AdminIndex />, children: [
            { path: "", element: <AdminMainPage /> },
            { path: "users", element: <AdminUsers /> },
            { path: "products", element: <AdminProduct /> },
            { path: "articles", element: <AdminArticles /> },
            { path: "orders", element: <AdminOrders /> },
            { path: "comments", element: <AdminComments /> },

        ]
    },
    {
        path: "/my-account", element: <UserIndex />, children: [

            { path: "", element: <MainIndex /> },
            { path: "my-address", element: <UserAddress /> },

            { path: "edit-account", element: <UserEditInfo /> },



        ]
    },
]
export default routes