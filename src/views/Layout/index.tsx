import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h1>React Router</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};
