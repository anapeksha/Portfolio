import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import ScrollToTop from "react-scroll-to-top";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Work from "./pages/Work";

const theme = createTheme({
	palette: {
		primary: {
			main: "#0b2446",
		},
		secondary: {
			main: "#62ffda",
		},
	},
});

const removeLoader = async (
	isLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
	setTimeout(() => {
		isLoading(false);
	}, 3000);
};

const App: React.FC = () => {
	const [loading, isLoading] = useState(true);

	removeLoader(isLoading);
	
	return (
		<div>
			{loading ? (
				<Loader type="cylon" color="#62ffda" height="250px" width="125px" />
			) : (
				<ThemeProvider theme={theme}>
					<Navbar />
					<Home />
					<About />
					<Experience />
					<Work />
					<Contact />
					<ScrollToTop
						smooth
						component={<ArrowUpwardRoundedIcon />}
						style={{
							backgroundColor: "#102137",
							color: "#62ffda",
							boxShadow: "none",
						}}
					/>
				</ThemeProvider>
			)}
		</div>
	);
};

export default App;
