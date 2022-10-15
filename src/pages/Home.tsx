import { Box, Button } from "@mui/material";
import { useState } from "react";
import wave from "../assets/wave.gif";
import Popover from "../components/Popover";
import CustomTypography from "../styles/CustomTypography.style";

const Home: React.FC = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	return (
		<Box id="#" sx={{ ml: 4 }}>
			<CustomTypography
				variant="h1"
				className="animate__animated animate__fadeInUp animate__fast"
			>
				hi
				<img src={wave} alt="wave" height="75" width="75" />
			</CustomTypography>
			<CustomTypography
				variant="h3"
				className="animate__animated animate__fadeInUp"
			>
				I am Anapeksha Mukherjee.
			</CustomTypography>
			<CustomTypography
				variant="h4"
				className="animate__animated animate__fadeInUp animate__slow"
				style={{
					color: "#62ffda",
				}}
			>
				intrigued,
			</CustomTypography>
			<CustomTypography
				variant="h4"
				className="animate__animated animate__fadeInUp animate__slower"
				style={{
					color: "#62ffda",
				}}
				gutterBottom
			>
				curious and hunting solutions in the tech space.
			</CustomTypography>
			<CustomTypography variant="h6" sx={{ mb: 4 }}>
				Working as a Software Engineer at{" "}
				<a
					style={{ color: "#62ffda", textDecoration: "none" }}
					href="https://www.mindtree.com"
					rel="noreferrer"
					target="_blank"
				>
					Mindtree Ltd.
				</a>
			</CustomTypography>
			<Box sx={{ mb: 4 }}>
				<Button
					variant="contained"
					size="large"
					color="secondary"
					style={{
						color: "#091c35",
					}}
					onClick={() => {
						setModalOpen(true);
					}}
				>
					View CV
				</Button>
			</Box>
			<Popover open={modalOpen} setOpen={setModalOpen} />
		</Box>
	);
};

export default Home;
