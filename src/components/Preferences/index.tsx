import { Box, Grid, Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

export const Preferences = () => {
  const [show, setShow] = useState<boolean>(false);
  const languages = [{ label: "The Shawshank Redemption", year: 1994 }];
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item>USD</Grid>
      <Grid
        item
        onClick={() => {
          setShow(!show);
        }}
      >
        Language
      </Grid>
      {show ? (
        <div>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={languages}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </div>
      ) : null}
      <Grid item>Dark o Light</Grid>
    </Grid>
  );
};
