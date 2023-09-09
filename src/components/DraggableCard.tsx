import { Card, CardContent, Typography, styled } from "@mui/material";
import Draggable from "react-draggable";

interface IAboutCard {
  body: string;
}

const CustomCard = styled(Card)({
  ":hover": {
    cursor: "move"
  }
})

const DraggableCard = (props: IAboutCard) => {
  return (
    <Draggable>
      <CustomCard sx={{ backgroundColor: "#e1f8e8" }} elevation={6}>
        <CardContent>
          <Typography
            sx={{
              fontFamily: "'Fira Code', monospace",
              fontWeight: "700",
            }}
          >
            {props.body}
          </Typography>
        </CardContent>
      </CustomCard>
    </Draggable>
  );
};

export default DraggableCard;
