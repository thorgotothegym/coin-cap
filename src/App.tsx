import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import { Layout } from "./views/Layout";
import { Home } from "./views/Home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Route>
      </Routes>
    </>
  );
};
