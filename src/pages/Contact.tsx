import {
  Alert,
  Button,
  Grid,
  TextField,
  Snackbar,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { sendForm } from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  connectFormData,
  emailJSConfig,
  connectHeader,
} from "../lib/Constants";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();
    sendForm(
      emailJSConfig.contact.SERVICE_ID as string,
      emailJSConfig.contact.TEMPLATE_ID as string,
      formRef.current as HTMLFormElement,
      emailJSConfig.contact.PUBLIC_KEY as string
    )
      .then((response) => {
        setSuccess(true);
        setOpen(true);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setOpen(true);
      });
  };
  const handleSnackbarClose = () => {
    setOpen(false);
    setSuccess(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackbarClose}
        autoHideDuration={3000}
      >
        <Alert severity={!success ? "error" : "success"}>
          {!success ? "Something went wrong" : "Submitted successfully"}
        </Alert>
      </Snackbar>
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
            fontSize="35px"
            fontFamily="'Karla Variable', sans-serif"
          >
            {connectHeader}
          </Typography>
          <form ref={formRef} onSubmit={submitForm}>
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
    </div>
  );
};

export default Contact;
