import { Typography } from "@mui/material";
import React from "react";
import { Movements } from "../../components/Movements";
import { Preferences } from "../../components/Preferences";

export const Home = () => {
  return (
    <>
      <Preferences />
      <Movements />
    </>
  );
};
