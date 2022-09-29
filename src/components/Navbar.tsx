import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";

const pages: Array<{ name: string; url: string }> = [
	{ name: "Experience", url: "#experience" },
	{ name: "Work", url: "#work" },
	{ name: "About", url: "#about" },
	{ name: "Contact", url: "#contact" },
];

const theme = createTheme({
	palette: {
		primary: {
			main: "#0b2446",
		},
	},
});

const Navbar: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<AppBar position="sticky" elevation={12} color="primary">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
							{pages.map((page, i: number) => (
								<Button
									key={i}
									sx={{ my: 2, color: "white", display: "block" }}
									href={page.url}
								>
									{page.name}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
};
export default Navbar;
