import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route } from "react-router-dom";
import { HomeTemplates } from "./Templates/HomeTemplates/HomeTemplates";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import New from "./Pages/New/New";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Detail from "./Pages/Detail/Detail";
import Checkout from "./Pages/Checkout/Checkout";
import React, { Suspense } from "react";
import CheckoutTemplate from "./Templates/CheckoutTemplates/CheckoutTemplates";
import { UserTemplates } from "./Templates/UserTemplates/UserTemplates";
import Profile from "./Profile/Profile";

// const CheckoutTemplate = React.lazy(() =>
//   import("./Templates/CheckoutTemplates/CheckoutTemplates")
// );
export const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <HomeTemplates path="/" exact component={Home} />
      <HomeTemplates path="/home" exact component={Home} />
      <HomeTemplates path="/contact" exact component={Contact} />
      <HomeTemplates path="/new" exact component={New} />
      <HomeTemplates path="/detail/:id" exact component={Detail} />
      <CheckoutTemplate path="/checkout/:id" exact component={Checkout} />
      {/* <Suspense fallback={<h1>LOADING...</h1>}>
        <CheckoutTemplate path="/checkout/:id" exact component={Checkout} />
      </Suspense> */}
      <HomeTemplates path="/profile" exact component={Profile} />
      <UserTemplates path="/login" exact component={Login} />
      <UserTemplates path="/register" exact component={Register} />
    </BrowserRouter>
  );
}

export default App;
