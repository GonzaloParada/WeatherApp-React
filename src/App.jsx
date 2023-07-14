import { useState } from "react";
import NavBar from "./components/NavBar";
import WeatherComponent from "./components/WeatherComponent";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
export default function app() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <NavBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <WeatherComponent />
      </CssBaseline>
    </ThemeProvider>
  );
}
