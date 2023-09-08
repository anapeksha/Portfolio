import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import aboutAvatar from "../assets/about-avatar.svg"
import { aboutTypewriterText } from "../lib/Constants";

const About = () => {
  return (
    <div>
        <Box
        display="flex"
        height="100vh"
        sx={{
          backgroundImage: `url(${aboutAvatar})`,
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
                strings: aboutTypewriterText,
                autoStart: true,
                delay: 70,
                deleteSpeed: 2,
                loop: true,
              }}
            />
          </Typography>
        </Box>
      </Box>
    </div>
  )
}

export default About;