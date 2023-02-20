import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const Movements = () => {
  return (
    <>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          GAnancias/Perdidas en las ultimas 24H
        </Grid>
      </Box>
    </>
  );
};
