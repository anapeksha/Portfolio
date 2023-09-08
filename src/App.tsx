import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Route, Routes, useLocation, Location } from "react-router-dom";
import Header from "./components/Header";
import { aboutTheme, homeTheme } from "./lib/Constants";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const setTheme = (location: Location)=>{
	if(location.pathname === "/home"){
		return homeTheme;
	}
	else if(location.pathname === "/about"){
		return aboutTheme;
	}
	else {
		return homeTheme;
	}
}

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
				</Routes>
			</ThemeProvider>
		</LocalizationProvider>
	);
}

export default App;
