import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack } from "@mui/material";
import ContactButton from "./ContactButton";

const ContactBar: React.FC = () => {
	return (
		<Stack direction="row" spacing={2} sx={{ mr: 4 }}>
			<ContactButton url="https://instagram.com/naaz.xo">
				<InstagramIcon fontSize="large" color="secondary" />
			</ContactButton>
			<ContactButton url="https://facebook.com/anapeksha.mukherjee">
				<FacebookIcon fontSize="large" color="secondary" />
			</ContactButton>
			<ContactButton url="https://linkedin.com/in/anapeksha-mukherjee">
				<LinkedInIcon fontSize="large" color="secondary" />
			</ContactButton>
			<ContactButton url="hhttps://github.com/anapeksha">
				<GitHubIcon fontSize="large" color="secondary" />
			</ContactButton>
			<ContactButton url="mailto:anapeksha.mukherjee@gmail.com">
				<EmailIcon fontSize="large" color="secondary" />
			</ContactButton>
		</Stack>
	);
};

export default ContactBar;
