import { Card, CardContent, Stack, Typography } from "@mui/material";

interface IHomeCard {
  heading: string;
  body: string;
}

const HomeCard = (props: IHomeCard) => {
  return (
    <Card sx={{ border: "2px solid #4b5486" }} elevation={7}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{props.heading}</Typography>
          <Typography variant="body1">{props.body}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
