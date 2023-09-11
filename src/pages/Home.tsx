import { Box, Button, Grid, Typography, Stack, Divider } from "@mui/material";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import homeAvatar from "../assets/home-avatar.svg";
import Footer from "../components/Footer";
import { homeCardContent, homeTypewriterText } from "../lib/Constants";
import DraggableCard from "../components/DraggableCard";

const Home = () => {
  const navigate = useNavigate();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      boxRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 16000);
  }, []);
  return (
    <div>
      <Box
        display="flex"
        height="100vh"
        sx={{
          backgroundImage: `url(${homeAvatar})`,
          backgroundSize: "100vw 100vh",
          opacity: "0.9",
        }}
      >
        <Box display="flex" height="40vh" alignItems="center" marginLeft="1%">
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              fontFamily: "'Fira Code', monospace",
              fontWeight: "700",
              fontSize: "7vh",
            }}
          >
            <Typewriter
              options={{
                strings: homeTypewriterText,
                autoStart: true,
                delay: 70,
                deleteSpeed: 2,
                loop: true,
              }}
            />
          </Typography>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" padding="2%" ref={boxRef}>
        <Typography
          style={{
            fontFamily: "'Wix Madefor Display', sans-serif",
            fontWeight: "700",
            fontSize: "6vh",
          }}
        >
          Out of everyone,
        </Typography>
        <Typography
          style={{
            fontFamily: "'Wix Madefor Display', sans-serif",
            fontWeight: "700",
            fontSize: "6vh",
          }}
          gutterBottom
        >
          Why Me?
        </Typography>
        <Grid container spacing={5} paddingBottom={5}>
          {homeCardContent.map((value, index) => {
            return (
              <Grid item xs={12} md={4} key={index}>
                <DraggableCard
                  parent={boxRef}
                  cardElevation={7}
                  style={{ border: "2px solid #4b5486" }}
                >
                  <Stack spacing={1}>
                    <Divider flexItem textAlign="left">
                      <Typography variant="h6">{value.heading}</Typography>
                    </Divider>
                    <Typography variant="body1">{value.body}</Typography>
                  </Stack>
                </DraggableCard>
              </Grid>
            );
          })}
        </Grid>
        <Typography
          style={{
            fontFamily: "'Wix Madefor Display', sans-serif",
            fontWeight: "700",
            fontSize: "6vh",
          }}
        >
          Don't just take my word for it
        </Typography>
        <Typography
          style={{
            fontFamily: "'Wix Madefor Display', sans-serif",
            fontWeight: "700",
            fontSize: "6vh",
          }}
          gutterBottom
        >
          - Say a Hi.
        </Typography>
        <Box>
          <Button
            size="large"
            variant="contained"
            sx={{ backgroundColor: "#3d5e94", mb: "2%" }}
            onClick={() => navigate("contact")}
          >
            Get your solution
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
