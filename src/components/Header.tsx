import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navItems } from "../lib/Constants";

const Header = () => {
	const navigate = useNavigate();
	return (
		<header>
			<AppBar color="transparent" elevation={0} position="static">
				<Toolbar>
					<IconButton
						edge="start"
						sx={{ display: { xs: "block", sm: "none" } }}
					>
						<Menu />
					</IconButton>
					<Stack sx={{ display: { xs: "none", sm: "block" } }} direction="row">
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
				</Toolbar>
			</AppBar>
		</header>
	);
};

export default Header;
