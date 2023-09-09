import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

interface IHomeCard {
  heading: string;
  body: string;
}

const HomeCard = (props: IHomeCard) => {
  return (
    <Card sx={{ border: "2px solid #4b5486" }} elevation={7}>
      <CardContent>
        <Stack spacing={1}>
          <Divider role="presentation" textAlign="left" flexItem>
            <Typography variant="h6">{props.heading}</Typography>
          </Divider>
          <Typography variant="body1">{props.body}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
