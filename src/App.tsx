import { ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { theme } from "./lib/Constants";
import Home from "./pages/Home";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Routes>
				<Route path="/" index element={<Home />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
