import { PATH } from "../const/path";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout";
import Contact from "../pages/contact";
import Home from "../pages/home";
import ProductDetail from "../pages/productDetail";
import Products from "../pages/products";
import Register from "../pages/register";

const routes = [
  {
    path: PATH.HOME,
    exact: true,
    component: <Home />,
  },
  {
    path: PATH.CONTACT,
    exact: true,
    component: <Contact />,
  },
  {
    path: PATH.REGISTER,
    exact: true,
    component: <Register />,
  },
  {
    path: PATH.PRODUCTS,
    exact: true,
    component: <Products />,
  },
  {
    path: PATH.PRODUCT_DETAIL,
    exact: true,
    component: <ProductDetail />,
  },
  {
    path: PATH.CHECKOUT,
    exact: true,
    component: <Checkout />,
  },
  {
    path: PATH.CART,
    exact: true,
    component: <Cart />,
  },
];

export default routes;
