import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Work from "./pages/Work";

const App: React.FC = () => {
	return (
		<div>
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
					backgroundColor: "#131313",
					color: "#62ffda",
					boxShadow: "none",
				}}
			/>
		</div>
	);
};

export default App;
