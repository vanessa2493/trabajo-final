import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Dashboard, Login, Profile, SearchMovies, Signup} from "./pages";
import './assets/scss/main.scss'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup/>}/>
        <Route path="searchMovies" element={<SearchMovies/>}/>
        <Route path="profile" element={<Profile/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
