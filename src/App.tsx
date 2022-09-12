import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Work from "./pages/Work";

const App: React.FC = () => {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Explore />
			<Work />
			<ScrollToTop
				smooth
				component={<ArrowUpwardRoundedIcon />}
				color="#161d22"
			/>
		</div>
	);
}

export default App;
