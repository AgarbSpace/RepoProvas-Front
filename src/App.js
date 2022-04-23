import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyled from "./GlobalStyleds/GlobalStyled";
import MainPage from "./MainPage/MainPage";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyled />
      <Routes>
        <Route path = "/signUp" element = {<SignUpPage />} />
        <Route path = "/signIn" element = {<SignInPage />} />
        <Route path = "/" element = {<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
