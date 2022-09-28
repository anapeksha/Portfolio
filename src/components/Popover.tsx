import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, Dialog, DialogActions, IconButton, Zoom } from "@mui/material";
import PdfRenderer from "./PdfRenderer";

const Popover = (props: any) => {
	const handleClose = () => {
		props.setOpen(false);
	};
	const pdf = require("../assets/resume/resume.pdf");
	return (
		<Dialog open={props.open} onClose={handleClose} TransitionComponent={Zoom}>
			<Box style={{ backgroundColor: "hsl(213deg 72% 12%)" }}>
				<DialogActions style={{ display: "flex", justifyContent: "start" }}>
					<IconButton onClick={handleClose} style={{ color: "#cccccc" }}>
						<CloseRoundedIcon fontSize="small" />
					</IconButton>
				</DialogActions>
				<PdfRenderer width="350px" height="500px" />
			</Box>
		</Dialog>
	);
};
export default Popover;
