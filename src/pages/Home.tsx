import wave from "../assets/wave.gif";
import CustomTypography from "../styles/CustomTypography.style";

const Home: React.FC = () => {
	return (
		<div id="#">
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
					backgroundImage:
						"linear-gradient(90deg, hsla(206, 70%, 50%, 1) 0%, hsla(196, 46%, 60%, 1) 6%, hsla(332, 83%, 45%, 1) 12%)",
					backgroundClip: "text",
					color: "transparent",
				}}
			>
				intrigued,
			</CustomTypography>
			<CustomTypography
				variant="h4"
				className="animate__animated animate__fadeInUp animate__slower"
				style={{
					backgroundImage:
						"linear-gradient(90deg, rgba(32,98,170,0.9037815809917717) 15%, rgba(147,37,204,0.8897759787508753) 45%)",
					backgroundClip: "text",
					color: "transparent",
				}}
				gutterBottom
			>
				curious and hunting solutions in the tech space.
			</CustomTypography>
		</div>
	);
};

export default Home;
