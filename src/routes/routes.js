import { PATH } from "../const/path";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Contact from "../pages/contact";
import Home from "../pages/home";
import ProductDetail from "../pages/productDetail";
import Products from "../pages/products";
import Register from "../pages/register";
import Categories from "../pages/categories";
import Login from "../pages/login";

const routes = [
  { path: PATH.HOME, element: <Home /> },
  {
    path: PATH.CONTACT,
    element: <Contact />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.REGISTER,
    element: <Register />,
  },
  {
    path: PATH.PRODUCTS,
    element: <Products />,
  },
  {
    path: PATH.PRODUCT_DETAIL,
    element: <ProductDetail />,
  },
  {
    path: PATH.CATEGORIES,
    element: <Categories />,
  },
  {
    path: PATH.CHECKOUT,
    element: <Checkout />,
  },
  {
    path: PATH.CART,
    element: <Cart />,
  },
];

export default routes;
