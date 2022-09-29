import { Box } from "@mui/material";
import CustomTypography from "../styles/CustomTypography.style";

const About: React.FC = () => {
	return (
		<Box id="about" sx={{ ml: 4 }}>
			<CustomTypography variant="h5" gutterBottom>
				Full Stack Developer working from Kolkata
			</CustomTypography>
		</Box>
	);
};

export default About;
