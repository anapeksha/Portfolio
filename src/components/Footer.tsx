import { sendForm } from "@emailjs/browser";
import { ArrowForward, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { FormEvent, useRef } from "react";
import { emailJSConfig } from "../lib/Constants";

const Footer = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const submitForm = (event: FormEvent) => {
		event.preventDefault();
		sendForm(
			emailJSConfig.contact.SERVICE_ID as string,
			emailJSConfig.contact.TEMPLATE_ID as string,
			formRef.current as HTMLFormElement,
			emailJSConfig.contact.PUBLIC_KEY as string
		)
			.then((response) => {
				return response;
			})
			.catch((error) => console.log(error));
	};
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-around",
				backgroundColor: "#ffdf84",
				p: "1%",
			}}
		>
			<Box sx={{ display: "flex", justifyContent: "center" }}>
				<Stack direction="row" spacing={4}>
					<IconButton
						onClick={() => {
							window.open("https://www.github.com/anapeksha");
						}}
						disableRipple
					>
						<GitHub />
					</IconButton>
					<IconButton
						onClick={() => {
							window.open("https://www.linkedin.com/in/anapeksha-mukherjee");
						}}
					>
						<LinkedIn />
					</IconButton>
					<IconButton
						onClick={() => {
							window.open("mailto:anapeksha.mukherjee.work@gmail.com");
						}}
					>
						<Mail />
					</IconButton>
				</Stack>
			</Box>
			<Box sx={{ display: "flex" }}>
				<form ref={formRef} onSubmit={submitForm}>
					<Stack direction="row" spacing={2}>
						<TextField label="Email" name="newsletter" type="email" />
						<Button
							variant="contained"
							endIcon={<ArrowForward />}
							color="inherit"
						>
							Newsletter
						</Button>
					</Stack>
				</form>
			</Box>
		</Box>
	);
};

export default Footer;
