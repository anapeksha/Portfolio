import { SpeedDial, styled } from "@mui/material";

const CustomSpeedDial = styled(SpeedDial)({
	"& .MuiFab-primary": {
		width: 40,
		height: 40,
		backgroundColor: "#62ffda",
		color: "black",
		"& .MuiSpeedDialIcon-icon": { fontSize: 25 },
		"&:hover": {
			backgroundColor: "#62ffda",
		},
	},
});

export default CustomSpeedDial;
