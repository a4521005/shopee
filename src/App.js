import React from "react";
import {BrowserRouter , Redirect, Switch, Route, Link} from "react-router-dom";
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage';
import "antd/dist/antd.css";

const App=() => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/mall"/>
        </Route>
        <Route path="/mall" exact>
          <HomePage/>
        </Route>
        <Route path="/cart" exact>
          <CartPage/>
        </Route>
        <Route path="/checkout" exact>
          <CheckoutPage/>
        </Route>
        <Route path="/mall/:categoryName" >
          <ProductCollectionPage/>
        </Route>
        <Route path="/:productName" >
          <ProductPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
