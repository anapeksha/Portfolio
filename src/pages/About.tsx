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
		<Box
			id="about"
			sx={{ display: "flex", ml: 4, justifyContent: "space-between" }}
		>
			<Box sx={{ display: "flex", mr: 2 }}>
				<CustomTypography variant="h5" gutterBottom>
					Full Stack Developer working from Kolkata
				</CustomTypography>
			</Box>
			<Box sx={{ display: "flex" }}>
				<Grid
					container
					justifyContent="space-around"
					spacing={2}
					sx={{ mr: 2 }}
				>
					{skills.map((skill, i) => {
						return (
							<Grid item xs={6} md={3} xl={2} key={i}>
								<BasicPaper skill={skill} />
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
};

export default About;
