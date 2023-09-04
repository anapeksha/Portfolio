import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { theme } from "./lib/Constants";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<ThemeProvider theme={theme}>
				<Header />
				<Routes>
					<Route path="/" index element={<Home />} />
					<Route path="contact" index element={<Contact />} />
				</Routes>
			</ThemeProvider>
		</LocalizationProvider>
	);
}

export default App;
