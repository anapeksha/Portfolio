import {
  KeyboardArrowRight,
  KeyboardArrowLeft,
  GitHub,
  Visibility,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  MobileStepper,
  Typography,
  Button,
  useTheme,
  CardActions,
  Tooltip,
  IconButton,
} from "@mui/material";

const Carousel = (props: any) => {
  const theme = useTheme();
  const maxSteps = props.data.length;

  const handleNext = () => {
    props.setStep((prevActiveStep: number) => prevActiveStep + 1);
  };

  const handleBack = () => {
    props.setStep((prevActiveStep: number) => prevActiveStep - 1);
  };

  return (
    <Card sx={{ maxWidth: 400, border: "solid #490B3D 1px" }} elevation={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {props.data[props.step].label}
        </Typography>
        <Typography variant="body2">
          {props.data[props.step].description}
        </Typography>
      </CardContent>

      <CardActions>
        <Tooltip title="GitHub">
          <IconButton
            onClick={() => window.open(props.data[props.step].githubUrl)}
          >
            <GitHub color="secondary" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Preview">
          <IconButton
            onClick={() => {
              props.setPreview(props.data[props.step].previewUrl);
            }}
          >
            <Visibility color="secondary" />
          </IconButton>
        </Tooltip>
      </CardActions>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={props.step}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={props.step === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={props.step === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Card>
  );
};

export default Carousel;
