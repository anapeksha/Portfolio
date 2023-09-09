import { Card, CardActions, CardContent, styled } from "@mui/material";
import { ReactNode, CSSProperties } from "react";
import { motion } from "framer-motion";

interface IDraggableCard {
  style?: CSSProperties;
  children: ReactNode;
  actions?: ReactNode;
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
      whileDrag={{ scale: 1.2 }}
    >
      <CardContent>{props.children}</CardContent>
      <CardActions>{props.actions}</CardActions>
    </CustomMotionCard>
  );
};

export default DraggableCard;
