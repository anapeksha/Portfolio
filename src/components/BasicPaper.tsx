import { Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import IPaperProps from "../interfaces/IPaperProps";

const BasicPaper: React.FC<IPaperProps> = (props) => {
	return (
		<Box sx={{ display: "flex", flexWrap: "wrap" }}>
			<motion.div
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 1.2 }}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
			>
				<Paper
					sx={{
						bgcolor: "#62ffda",
						color: "#102137",
						width: 95,
						textAlign: "center",
						fontSize: 20,
						padding: "2px",
						cursor: "pointer",
						overflowX: "auto",
					}}
					elevation={10}
				>
					{props.skill}
				</Paper>
			</motion.div>
		</Box>
	);
};

export default BasicPaper;
