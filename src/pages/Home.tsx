import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import homeAvatar from "../assets/home-avatar.svg";
import { homeTypewriterText } from "../lib/Constants";

const Home = () => {
	return (
		<div>
			<Box
				display="flex"
				height="100vh"
				sx={{
					backgroundImage: `url(${homeAvatar})`,
					backgroundSize: "100vw 100vh",
					opacity: "0.9",
				}}
			>
				<Typography
					sx={{
						display: "flex",
						position: "relative",
						top: "20%",
						left: "75%",
						transform: "translateX(-65%)",
						fontFamily: "'Fira Code', monospace",
						fontWeight: "700",
						fontSize: "7vh",
					}}
				>
					<Typewriter
						options={{
							strings: homeTypewriterText,
							autoStart: true,
							delay: 70,
							deleteSpeed: 2,
						}}
					/>
				</Typography>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				style={{ backgroundColor: "#c9cddf" }}
				padding="2%"
			>
				<Typography
					style={{
						fontFamily: "'Wix Madefor Display', sans-serif",
						fontWeight: "700",
						fontSize: "6vh",
					}}
				>
					Out of everyone,
				</Typography>
				<Typography
					style={{
						fontFamily: "'Wix Madefor Display', sans-serif",
						fontWeight: "700",
						fontSize: "6vh",
					}}
					gutterBottom
				>
					Why Me?
				</Typography>
				<Grid container spacing={5} paddingBottom={5}>
					<Grid item xs={6} md={4} xl={4}>
						<Stack spacing={1}>
							<Divider />
							<Typography variant="h6">Proven Track Record</Typography>
							<Typography variant="body1">
								I have a track record of delivering high-quality software
								solutions for a wide range of clients and projects.
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} md={4} xl={4}>
						<Stack spacing={1}>
							<Divider />
							<Typography variant="h6">Technical Expertise</Typography>
							<Typography variant="body1">
								With proficiency in various programming languages, frameworks,
								and tools, I can tackle diverse software development challenges.
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} md={4} xl={4}>
						<Stack spacing={1}>
							<Divider />
							<Typography variant="h6">Continuous Learning</Typography>
							<Typography variant="body1">
								The tech world evolves rapidly, and I stay up-to-date with the
								latest trends and technologies to offer the best solutions.
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} md={4} xl={4}>
						<Stack spacing={1}>
							<Divider />
							<Typography variant="h6">Proven Track Record</Typography>
							<Typography variant="body1">
								I have a track record of delivering high-quality software
								solutions for a wide range of clients and projects.
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} md={4} xl={4}>
						<Stack spacing={1}>
							<Divider />
							<Typography variant="h6">Technical Expertise</Typography>
							<Typography variant="body1">
								With proficiency in various programming languages, frameworks,
								and tools, I can tackle diverse software development challenges.
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6} md={4} xl={4}>
						<Stack spacing={1}>
							<Divider />
							<Typography variant="h6">Continuous Learning</Typography>
							<Typography variant="body1">
								The tech world evolves rapidly, and I stay up-to-date with the
								latest trends and technologies to offer the best solutions.
							</Typography>
						</Stack>
					</Grid>
				</Grid>
				<Typography
					style={{
						fontFamily: "'Wix Madefor Display', sans-serif",
						fontWeight: "700",
						fontSize: "6vh",
					}}
				>
					Don't just take my word for it
				</Typography>
				<Typography
					style={{
						fontFamily: "'Wix Madefor Display', sans-serif",
						fontWeight: "700",
						fontSize: "6vh",
					}}
					gutterBottom
				>
					- Say a Hi.
				</Typography>
				<Box>
					<Button
						size="large"
						variant="contained"
						sx={{ backgroundColor: "#3d5e94" }}
					>
						Get your solution
					</Button>
				</Box>
			</Box>
		</div>
	);
};

export default Home;
