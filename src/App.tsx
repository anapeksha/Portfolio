import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Route, Routes, useLocation, Location } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import {
  aboutTheme,
  connectTheme,
  homeTheme,
  projectTheme,
} from "./lib/Constants";
import Home from "./pages/Home";
import Loader from "./components/Loader";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Project = lazy(() => import("./pages/Project"));

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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Project />} />
          </Routes>
        </Suspense>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
