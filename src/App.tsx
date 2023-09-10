import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Route, Routes, useLocation, Location } from "react-router-dom";
import Header from "./components/Header";
import {
  aboutTheme,
  connectTheme,
  homeTheme,
  projectTheme,
} from "./lib/Constants";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";

const setTheme = (location: Location) => {
  if (location.pathname === "/") {
    return homeTheme;
  } else if (location.pathname === "/about") {
    return aboutTheme;
  } else if (location.pathname === "/contact") {
    return connectTheme;
  } else if (location.pathname === "/project") {
    return projectTheme;
  } else {
    return homeTheme;
  }
};

function App() {
  const location = useLocation();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={setTheme(location)}>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
        </Routes>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
