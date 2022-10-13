import { Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import IPaperProps from "../interfaces/IPaperProps";

const BasicPaper: React.FC<IPaperProps> = (props) => {
	return (
		<motion.div
			whileHover={{ scale: 2 }}
			whileTap={{ scale: 2 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
		>
			<Box sx={{ display: "flex", flexWrap: "wrap" }}>
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
			</Box>
		</motion.div>
	);
};

export default BasicPaper;
