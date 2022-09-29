import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ScrollToTop from "react-scroll-to-top";
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

const App: React.FC = () => {
	return (
		<div>
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
						backgroundColor: "#172945",
						color: "#62ffda",
						boxShadow: "none",
					}}
				/>
			</ThemeProvider>
		</div>
	);
};

export default App;
