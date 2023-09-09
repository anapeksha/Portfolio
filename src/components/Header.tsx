import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { drawerWidth, navItems } from "../lib/Constants";

const Header = (props: any) => {
  const { window } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item.url)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key="contact" disablePadding>
          <ListItemButton
            sx={{ textAlign: "center" }}
            onClick={() => navigate("contact")}
          >
            <ListItemText primary="Say Hello!" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header>
      <Box>
        <AppBar color="transparent" elevation={0} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Stack
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
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
                variant="contained"
                sx={{ display: { xs: "none", md: "flex" } }}
                onClick={() => navigate("contact")}
              >
                Say Hello!
              </Button>
            ) : null}
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "flex", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
