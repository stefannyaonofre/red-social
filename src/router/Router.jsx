import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import { initialUser, userReducer } from "../reducer/userReducer";

export const AppContext = createContext({});

const Router = () => {

    const [ userLogin, userDispatch ] = useReducer(userReducer, initialUser);
    const globalState = {
        user: {
            userLogin,
            userDispatch
    }}

  return (
    <AppContext.Provider value={globalState}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route element={<PublicRouter isAuthenticate={userLogin.isAuthenticate} />}>
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />}/>
            </Route>
            <Route element={<PrivateRouter isAuthenticate={userLogin.isAuthenticate} />}>
                <Route index element={<Home />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default Router;
