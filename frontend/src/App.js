import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProductScreen from "./screens/ProductScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/orders/:id" component={OrderScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/profile" component={ProfileScreen} />
                    <Route path="/shipping" component={ShippingScreen} />
                    <Route path="/payment" component={PaymentScreen} />
                    <Route path="/placeorder" component={PlaceOrderScreen} />

                    <Route path="/cart/:id?" component={CartScreen} />
                    <Route path="/product/:id" component={ProductScreen} />
                    <Route exact path="/" component={HomeScreen} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
