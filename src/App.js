import GlobalStyle from "./globalStyle";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductsList from "./pages/ProductsList";
import CartProduct from "./pages/CartProduct";
import ProductById from "./pages/ProductById";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import User from "./pages/User";

function App() {
  const user = false;
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductsList />
          </Route>
          <Route path="/product/:id">
            <ProductById />
          </Route>
          <Route path="/cart">
            <CartProduct />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
