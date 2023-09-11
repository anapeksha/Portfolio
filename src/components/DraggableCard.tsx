import { Card, CardActions, CardContent, styled } from "@mui/material";
import { ReactNode, CSSProperties, RefObject } from "react";
import { motion } from "framer-motion";

interface IDraggableCard {
  style?: CSSProperties;
  cardElevation?: number;
  children: ReactNode;
  actions?: ReactNode;
  parent?: RefObject<any>;
}

const MotionCard = motion(Card, { forwardMotionProps: true });

const CustomMotionCard = styled(MotionCard)({
  ":hover": {
    cursor: "move",
  },
});

const DraggableCard = (props: IDraggableCard) => {
  return (
    <CustomMotionCard
      style={props.style}
      elevation={props.cardElevation ? props.cardElevation : 6}
      drag
      dragConstraints={
        props.parent ? props.parent : { left: 0, right: 0, top: 0, bottom: 0 }
      }
      dragSnapToOrigin
      whileDrag={{ scale: 1.05 }}
    >
      <CardContent>{props.children}</CardContent>
      <CardActions>{props.actions}</CardActions>
    </CustomMotionCard>
  );
};

export default DraggableCard;
