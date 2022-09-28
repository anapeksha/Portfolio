import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import IContactProps from "../interfaces/IContactProps";

const ContactButton: React.FC<IContactProps> = (props) => {
	return (
		<motion.div whileHover={{ scale: 0.8 }}>
			<IconButton edge="start" href={props.url} target="_blank">
				{props.children}
			</IconButton>
		</motion.div>
	);
};

export default ContactButton;
