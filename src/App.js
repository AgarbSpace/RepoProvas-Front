import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./Auth/AuthContext";
import { ReloadContextProvider } from "./Auth/ReloadContext";
import GlobalStyled from "./GlobalStyleds/GlobalStyled";
import MainPage from "./MainPage/MainPage";
import SignInPage from "./SignInPage/SignInPage";
import SignUpPage from "./SignUpPage/SignUpPage";

function App() {
  return (
    <AuthProvider>
      <ReloadContextProvider>
        <BrowserRouter>
        <GlobalStyled />
          <Routes>
            <Route path = "/signUp" element = {<SignUpPage />} />
            <Route path = "/signIn" element = {<SignInPage />} />
            <Route path = "/" element = {<MainPage/>} />
          </Routes>
        </BrowserRouter>
      </ReloadContextProvider>
    </AuthProvider>
  );
}

export default App;
