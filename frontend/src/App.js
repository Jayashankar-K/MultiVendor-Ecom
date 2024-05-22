import { Routes, Route } from "react-router-dom";

//Assets
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

//Website
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import CategoryProducts from "./components/CategoryProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailure from "./components/OrderFailure";

//Customer Panel
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import WishList from "./components/Customer/WishList";
import ChangePassword from "./components/Customer/ChangePassword";
import Profile from "./components/Customer/Profile";
import AddressList from "./components/Customer/AddressList";
import AddAddress from "./components/Customer/AddAddress";

//Seller Panel

import SellerRegister from "./components/Seller/SellerRegister";
import SellerLogin from "./components/Seller/SellerLogin";
import SellerDashboard from "./components/Seller/SellerDashboard";
import SellerProdcuts from "./components/Seller/SellerProducts";
import AddProduct from "./components/Seller/AddProduct";
import VendorOrders from "./components/Seller/VendorOrders";
import SellerReport from "./components/Seller/SellerReport";
import SellerProfile from "./components/Seller/SellerProfile";
import SellerChangePassword from "./components/Seller/SellerChangePassword";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/category/:category_slug/:category_id"
          element={<CategoryProducts />}
        />
        <Route
          path="/product/:product_slug/:product_id"
          element={<ProductDetail />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/order/failure" element={<OrderFailure />} />

        {/*Customer Routes*/}
        <Route path="/customer/register" element={<Register />} />
        <Route path="/customer/login" element={<Login />} />
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/orders" element={<Orders />} />
        <Route path="/customer/wishlist" element={<WishList />} />
        <Route path="/customer/change-password" element={<ChangePassword />} />
        <Route path="/customer/update-profile" element={<Profile />} />
        <Route path="/customer/addresses" element={<AddressList />} />
        <Route path="/customer/add-address" element={<AddAddress />} />

        {/*Vendor Routes*/}
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/products" element={<SellerProdcuts />} />
        <Route path="/seller/add-product" element={<AddProduct />} />
        <Route path="/seller/orders" element={<VendorOrders />} />
        <Route path="/seller/reports" element={<SellerReport />} />
        <Route path="/seller/update-profile" element={<SellerProfile />} />
        <Route
          path="/seller/change-password"
          element={<SellerChangePassword />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
