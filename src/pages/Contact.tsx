import { Button, Grid, TextField, Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useRef } from "react";
import { connectFormData } from "../lib/Constants";

const Contact = () => {
	const form = useRef<any>();
	const submitForm = (event: React.FormEvent) => {
		event.preventDefault();
		console.log(form.current);
	};
	return (
		<Grid
			container
			justifyContent="center"
			sx={{
				display: "flex",
				height: { xs: "auto", md: "80vh" },
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Grid item xs={9}>
				<Typography
					variant="h4"
					gutterBottom
					fontWeight="bold"
					fontSize="5.2vh"
					fontFamily="'Karla Variable', sans-serif"
				>
					It starts with a conversation.
				</Typography>
				<form ref={form} onSubmit={submitForm}>
					<Grid container spacing={1}>
						{connectFormData.map((data, index) => {
							if (data.name === "message") {
								return (
									<Grid item xs={12} key={index}>
										<TextField
											label={data.label}
											name={data.name}
											multiline
											rows={4}
											placeholder="Type your message here"
											variant="outlined"
											fullWidth
											required={data.required}
										/>
									</Grid>
								);
							} else if (data.name === "date_time") {
								return (
									<Grid xs={12} sm={6} item key={index}>
										<DateTimePicker
											disablePast
											formatDensity="spacious"
											slotProps={{
												textField: {
													name: data.name,
													type: data.type,
													label: data.label,
													required: data.required,
												},
											}}
											sx={{ display: "flex" }}
										/>
									</Grid>
								);
							} else {
								return (
									<Grid xs={12} sm={6} item key={index}>
										<TextField
											label={data.label}
											name={data.name}
											type={data.type}
											variant="outlined"
											fullWidth
											required={data.required}
										/>
									</Grid>
								);
							}
						})}

						<Grid item xs={12}>
							<Button
								type="submit"
								variant="contained"
								color="secondary"
								fullWidth
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Grid>
	);
};

export default Contact;
