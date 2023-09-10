import { Card, CardActions, CardContent, styled } from "@mui/material";
import { ReactNode, CSSProperties, RefObject } from "react";
import { motion } from "framer-motion";

interface IDraggableCard {
  style?: CSSProperties;
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
      elevation={6}
      drag
      dragConstraints={props.parent}
      dragSnapToOrigin
      whileDrag={{ scale: 1.05 }}
    >
      <CardContent>{props.children}</CardContent>
      <CardActions>{props.actions}</CardActions>
    </CustomMotionCard>
  );
};

export default DraggableCard;
