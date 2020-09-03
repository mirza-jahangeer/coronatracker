import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

export const Header = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <AcUnitIcon />
          <Typography variant="title">COVID-19 Tracker</Typography>

            <Typography variant="h6" text-align="right">
            
            Cornona Virus Ruined the entire 2020 of the entire World.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
