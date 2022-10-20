import { Box, styled } from "@mui/material";

const CenteredBox = styled(Box)({
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

export default CenteredBox;
