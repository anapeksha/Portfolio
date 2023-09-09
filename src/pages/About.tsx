import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import AboutAvatar from "../assets/about-avatar.svg";
import { aboutCardText, skills, skillsHeading } from "../lib/Constants";
import DraggableCard from "../components/DraggableCard";

const About = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          backgroundImage: `url(${AboutAvatar})`,
          backgroundSize: "100vw 100vh",
          backgroundRepeat: "no-repeat",
          opacity: "0.9",
        }}
      >
        <Grid container spacing={2} sx={{ p: 4 }}>
          {aboutCardText.map((value, index) => {
            if (index % 2 === 0) {
              return (
                <>
                  <Grid item xs={12} sm={6}>
                    <DraggableCard
                      key={index}
                      style={{ backgroundColor: "#e1f8e8" }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Fira Code', monospace",
                          fontWeight: "700",
                        }}
                      >
                        {value}
                      </Typography>
                    </DraggableCard>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box></Box>
                  </Grid>
                </>
              );
            } else {
              return (
                <>
                  <Grid item xs={12} sm={6}>
                    <Box></Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DraggableCard
                      key={index}
                      style={{ backgroundColor: "#e1f8e8" }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Fira Code', monospace",
                          fontWeight: "700",
                        }}
                      >
                        {value}
                      </Typography>
                    </DraggableCard>
                  </Grid>
                </>
              );
            }
          })}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Stack spacing={2} sx={{ ml: 4 }}>
          <Typography gutterBottom>{skillsHeading}</Typography>
          <Grid container rowGap={2}>
            {skills.map((value, index) => {
              return (
                <Grid item xs={6} sm={4}>
                  <Chip
                    icon={<CheckCircle color="primary" />}
                    label={value}
                    key={index}
                    color="secondary"
                    sx={{ whiteSpace: "normal" }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Box>
    </div>
  );
};

export default About;
