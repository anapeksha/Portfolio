import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: { main: "#4b5486" },
		secondary: { main: "#c9cddf" },
		mode: "light",
	},
});

const homeTypewriterText = [
	"I",
	"build code.",
	"I",
	"create solutions.",
	"I",
	"shape innovation.",
];

const navItems = [
	{ name: "Home", url: "/" },
	{ name: "About", url: "about" },
	{ name: "Blog", url: "blog" },
];

export { homeTypewriterText, navItems, theme };
