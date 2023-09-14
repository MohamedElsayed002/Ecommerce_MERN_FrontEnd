
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import {
  LandingPage,
  LayoutPage,
  LoginPage,
  RegisterPage,
  HomePage,
  Products,
  ContactPage,
  SettingsPage,
  CartPage,
  WishList,
  Brands,
  ErrorPage,
  SingleBrand,
  CategoryPage,
  ProductPage,
  CheckOut,
  Admin,
  AdminProduct,
  AllProducts,
  AllUsers,
  AddProducts,
  UserAdmin,
  Order
} from "./pages";
import { ToastContainer } from 'react-toastify';
import { loader as UserData } from "./pages/SettingsPage";
import { action as UserAction } from './pages/SettingsPage'
import { loader as LoaderBrands } from './pages/Brands'
import { loader as HomeLoader } from './pages/HomePage'
import { loader as ProductsLoader } from './pages/Products'
import { loader as ProductLoader } from './pages/ProductPage'
import ProtectedRoutes from "./components/ProtectedRoutes";
import { action as ContactAction } from "./pages/ContactPage";
import { loader as CartLoader } from './pages/CartPage'
import { loader as CheckOutLoader } from './pages/Checkout'
import { action as CheckOutAction } from './pages/Checkout'
import { loader as AllUserss } from './pages/AllUsers'
import { loader as AllProductss } from './pages/AllProducts'
import { loader as OrdersLoader } from './pages/Order'
import { action as ActionAddProduct } from './pages/AddProducts'
import {loader as AdminProductt} from './pages/AdminProduct'
import {action as ActionUpdateProduct} from './pages/AdminProduct'
import {loader as UserAdminLoader} from './pages/UserAdmin'
import {action as UserAdminAction} from './pages/UserAdmin'
// import { action as LoginAction } from "./pages/RegisterPage";
// import {Offline , Online} from 'react-detect-offline'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<LayoutPage />}>
      <Route
        index element={<HomePage />}
        loader={HomeLoader}
        errorElement={<h1 className="text-center text-4xl block my-24">There error fetch categories</h1>}
      />
      <Route path="products" element={<Products />} loader={ProductsLoader} />
      <Route path="products/:id" element={<ProductPage />} loader={ProductLoader} />
      <Route path="brands" element={<Brands />} loader={LoaderBrands} />
      <Route path="brands/:id" element={<SingleBrand />} />
      <Route path="category/:id" element={<CategoryPage />} />
      <Route path="user" element={<ProtectedRoutes />}>
        <Route path="contact-us" element={<ContactPage />} action={ContactAction} />
        <Route path="settings" element={<SettingsPage />} loader={UserData} action={UserAction} />
        <Route path="cart" element={<CartPage />} loader={CartLoader} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="check-out/:id" element={<CheckOut />} loader={CheckOutLoader} action={CheckOutAction} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<AllUsers />} loader={AllUserss} />
          <Route path="all-products" element={<AllProducts />} loader={AllProductss} />
          <Route path="product/:id" element={<AdminProduct/>} loader={AdminProductt} action={ActionUpdateProduct} />
          <Route path="user/:id"  element={<UserAdmin/>} loader={UserAdminLoader} action={UserAdminAction} />
          <Route path="add-products" element={<AddProducts />} action={ActionAddProduct} />
          <Route path="orders" element={<Order />} loader={OrdersLoader} />
        </Route>
      </Route>
    </Route>
    <Route path="/landing" element={<LandingPage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />
    <Route path="*" element={<ErrorPage />} />
  </>
))

const App = () => {
  return (
    <>
      <ToastContainer theme="light" position="bottom-right" autoClose={1500} />
      <RouterProvider router={router} />
    </>
  )
}

export default App








