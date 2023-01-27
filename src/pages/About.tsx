import { Box, Grid } from "@mui/material";
import BasicPaper from "../components/BasicPaper";
import CustomTypography from "../styles/CustomTypography.style";

const skills = [
	{ skill: "React", url: "https://reactjs.org" },
	{ skill: "Redux", url: "https://redux.js.org" },
	{ skill: "MUI", url: "https://mui.com" },
	{ skill: "C++", url: "https://cplusplus.com" },
	{ skill: "Javascript", url: "https://www.javascript.com" },
	{ skill: "Typescript", url: "https://www.typescriptlang.org" },
	{ skill: "Express", url: "https://expressjs.com" },
	{ skill: "Git", url: "https://git-scm.com" },
	{ skill: "Github", url: "https://github.com" },
	{ skill: "Python", url: "https://www.python.org" },
	{ skill: "Nextjs", url: "https://nextjs.org" },
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
				{skills.map((data, i) => {
					return (
						<Grid item xs={6} md={3} xl={2} key={i}>
							<BasicPaper skill={data.skill} url={data.url} />
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default About;
