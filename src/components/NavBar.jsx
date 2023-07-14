import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeSwitch from "./DarkModeSwitch";

export default function NavBar({ check, change }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <DarkModeSwitch check={check} change={change} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
