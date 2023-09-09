import { Card, CardActions, CardContent } from "@mui/material";
import { ReactNode, CSSProperties } from "react";

interface IDraggableCard {
  style?: CSSProperties;
  children: ReactNode;
  actions?: ReactNode;
}

const DraggableCard = (props: IDraggableCard) => {
  return (
    <Card style={props.style} elevation={6}>
      <CardContent>{props.children}</CardContent>
      <CardActions>{props.actions}</CardActions>
    </Card>
  );
};

export default DraggableCard;
