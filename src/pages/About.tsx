import { Box, Grid } from "@mui/material";
import BasicPaper from "../components/BasicPaper";
import CustomTypography from "../styles/CustomTypography.style";

const skills = [
	"React",
	"Redux",
	"MUI",
	"C++",
	"Javascript",
	"Typescript",
	"Express",
	"Git",
	"Github",
	"Python",
];

const About: React.FC = () => {
	return (
		<Box id="about" sx={{ ml: 4 }}>
			<CustomTypography variant="h5" gutterBottom sx={{ mr: 2, mb: 4 }}>
				A growing software developer with a passion to build. Every code has a
				mind behind, and I envision my passion a route to innovate programs that
				highlight efficiency, competence, and a channel for success.
			</CustomTypography>
			<Grid container justifyContent="space-around" spacing={2} sx={{ mr: 2 }}>
				{skills.map((skill, i) => {
					return (
						<Grid item xs={6} md={3} xl={2} key={i}>
							<BasicPaper skill={skill} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default About;
