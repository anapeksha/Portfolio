import { Card, CardActions, CardContent, styled } from "@mui/material";
import { ReactNode, CSSProperties } from "react";

interface ICard {
  style?: CSSProperties;
  cardElevation?: number;
  children: ReactNode;
  actions?: ReactNode;
}

const StyledCard = styled(Card)({
  ":hover": {
    scale: 1.05,
  },
});

const CustomCard = (props: ICard) => {
  return (
    <StyledCard
      style={props.style}
      elevation={props.cardElevation ? props.cardElevation : 6}
    >
      <CardContent>{props.children}</CardContent>
      <CardActions>{props.actions}</CardActions>
    </StyledCard>
  );
};

export default CustomCard;
