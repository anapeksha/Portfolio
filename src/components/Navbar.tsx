import CallRoundedIcon from "@mui/icons-material/CallRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import BasicSpeedDial from "./BasicSpeedDial";

const actions = [
	{
		icon: <TrendingUpRoundedIcon color="primary" />,
		name: "Experience",
		url: "#experience",
	},
	{ icon: <WorkRoundedIcon color="primary" />, name: "Work", url: "#work" },
	{ icon: <InfoRoundedIcon color="primary" />, name: "About", url: "#about" },
	{
		icon: <CallRoundedIcon color="primary" />,
		name: "Contact",
		url: "#contact",
	},
];

const Navbar: React.FC = () => {
	return (
		<AppBar position="sticky" elevation={12} color="primary">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
						<BasicSpeedDial actions={actions} />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
