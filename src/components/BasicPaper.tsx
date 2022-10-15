import { Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import IPaperProps from "../interfaces/IPaperProps";

const BasicPaper: React.FC<IPaperProps> = (props) => {
	return (
		<Box sx={{ display: "flex", flexWrap: "wrap" }}>
			<motion.div
				whileHover={{ scale: 1.4 }}
				whileTap={{ scale: 1.4 }}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
			>
				<Paper
					sx={{
						bgcolor: "#62ffda",
						color: "#102137",
						width: 90,
						textAlign: "center",
						fontSize: 20,
						cursor: "pointer",
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
