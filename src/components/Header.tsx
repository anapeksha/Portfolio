import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../lib/Constants";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<header>
			<AppBar color="transparent" elevation={0} position="static">
				<Toolbar>
					<IconButton
						edge="start"
						sx={{ display: { xs: "block", md: "none" } }}
					>
						<Menu />
					</IconButton>
					<Stack
						sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
						direction="row"
					>
						{navItems.map((value, index) => {
							return (
								<Button
									size="large"
									key={index}
									onClick={() => navigate(value.url)}
								>
									{value.name}
								</Button>
							);
						})}
					</Stack>
					{location.pathname !== "/contact" ? (
						<Button
							sx={{ flexGrow: 0 }}
							variant="contained"
							onClick={() => navigate("contact")}
						>
							Say Hello!
						</Button>
					) : null}
				</Toolbar>
			</AppBar>
		</header>
	);
};

export default Header;