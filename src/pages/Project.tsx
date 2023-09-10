import { Box, Stack } from "@mui/material";
import { useState } from "react";
import Laptop from "../components/Laptop";
import Carousel from "../components/Carousel";
import { carouselSteps } from "../lib/Constants";

const Project = () => {
  const [preview, setPreview] = useState<string>("");
  const [carouselStep, setCarouselStep] = useState(0);
  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "center", minHeight: "100vh" }}
      >
        <Stack spacing={-1}>
          <Laptop src={preview} />
          <Carousel
            data={carouselSteps}
            step={carouselStep}
            setStep={setCarouselStep}
            setPreview={setPreview}
          />
        </Stack>
      </Box>
    </div>
  );
};

export default Project;
