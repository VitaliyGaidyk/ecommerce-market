import React from "react";
import Home from "../pages/Home";
import {Route, Routes, Navigate} from "react-router-dom";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routers: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='home'/>}/>
			<Route path='home' element={<Home/>}/>
			<Route path='shop' element={<Shop/>}/>
			<Route path='shop/:id' element={<ProductDetails/>}/>
			<Route path='cart' element={<Cart/>}/>
			<Route path='checkout' element={<Checkout/>}/>
			<Route path='login' element={<Login/>}/>
			<Route path='signup' element={<Signup/>}/>
		</Routes>
	);
};

export default Routers;