import { sendForm } from "@emailjs/browser";
import { ArrowForward, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Grid, Chip } from "@mui/material";
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
    <Grid
      container
      display="flex"
      alignItems="center"
      padding={1}
      rowSpacing={2}
    >
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="row" spacing={4}>
            <Chip
              icon={<GitHub />}
              label="GitHub"
              onClick={() => {
                window.open("https://www.github.com/anapeksha");
              }}
            />
            <Chip
              label="LinkedIn"
              icon={<LinkedIn />}
              onClick={() => {
                window.open("https://www.linkedin.com/in/anapeksha-mukherjee");
              }}
            />
            <Chip
              label="Email"
              icon={<Mail />}
              onClick={() => {
                window.open("mailto:anapeksha.mukherjee.work@gmail.com");
              }}
            />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: "flex" }}>
          <form ref={formRef} onSubmit={submitForm}>
            <Stack direction="row" spacing={2}>
              <TextField
                label="Email"
                name="newsletter"
                type="email"
                required
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<ArrowForward />}
                color="inherit"
                onSubmit={submitForm}
              >
                Newsletter
              </Button>
            </Stack>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
