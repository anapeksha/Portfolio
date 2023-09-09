import { Box, Grid } from "@mui/material";
import AboutAvatar from "../assets/about-avatar.svg";
import { aboutCardText } from "../lib/Constants";
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
          opacity: "0.9",
        }}
      >
        <Grid container sx={{ p: 4 }} spacing={2}>
          {aboutCardText.map((value, index) => {
            if (index % 2 === 0) {
              return (
                <>
                  <Grid item xs={12} sm={6}>
                    <DraggableCard body={value} key={index} />
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
                    <DraggableCard body={value} key={index} />
                  </Grid>
                </>
              );
            }
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default About;
