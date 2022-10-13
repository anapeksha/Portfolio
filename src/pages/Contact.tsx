import { Box } from "@mui/material";
import ContactBar from "../components/ContactBar";

const Contact = () => {
	return (
		<Box
			id="contact"
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<ContactBar />
		</Box>
	);
};

export default Contact;
