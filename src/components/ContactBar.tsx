import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack } from "@mui/material";
import ContactButton from "./ContactButton";

const ContactBar: React.FC = () => {
	return (
		<Stack direction="row" spacing={0.25} sx={{ ml: 4 }}>
			<ContactButton url="https://instagram.com/naaz.xo">
				<InstagramIcon fontSize="small" style={{ color: "#62ffda" }} />
			</ContactButton>
			<ContactButton url="https://facebook.com/anapeksha.mukherjee">
				<FacebookIcon fontSize="small" style={{ color: "#62ffda" }} />
			</ContactButton>
			<ContactButton url="https://linkedin.com/in/anapeksha-mukherjee">
				<LinkedInIcon fontSize="small" style={{ color: "#62ffda" }} />
			</ContactButton>
			<ContactButton url="hhttps://github.com/anapeksha">
				<GitHubIcon fontSize="small" style={{ color: "#62ffda" }} />
			</ContactButton>
			<ContactButton url="mailto:anapeksha.mukherjee@gmail.com">
				<EmailIcon fontSize="small" style={{ color: "#62ffda" }} />
			</ContactButton>
		</Stack>
	);
};

export default ContactBar;
