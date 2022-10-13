import FolderIcon from "@mui/icons-material/FolderRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import {
	Box,
	Card,
	CardActions,
	CardContent,
	IconButton,
	Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import ICardProps from "../interfaces/ICardProps";

const Cards: React.FC<ICardProps> = (props) => {
	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 1.1 }}
			transition={{ type: "spring", stiffness: 400, damping: 10 }}
		>
			<Card
				sx={{
					maxWidth: 257,
					width: "100%",
					maxHeight: 200,
					borderColor: "#62ffda",
					backgroundColor: "#172945",
					borderWidth: "2px",
					borderRadius: "6px",
					overflow: "auto",
				}}
				variant="outlined"
			>
				<CardContent>
					<Box>
						<FolderIcon fontSize="large" sx={{ color: "#62ffda" }} />
					</Box>
					<Typography variant="h6" color="#cbd6f6" gutterBottom>
						{props.title}
					</Typography>
					<Typography sx={{ fontSize: 11, color: "#62ffda" }}>
						{props.techs.map((tech, i) => {
							if (i !== props.techs.length - 1) {
								return tech + " • ";
							} else {
								return tech;
							}
						})}
					</Typography>
					<Typography variant="caption" sx={{ fontSize: 14 }} color="#a7b2d0">
						{props.description}
					</Typography>
				</CardContent>
				<CardActions>
					<motion.div whileHover={{ scale: 0.8 }}>
						<IconButton href={props.githubUrl} target="_blank">
							<GitHubIcon fontSize="small" color="secondary" />
						</IconButton>
					</motion.div>
					{props.url !== "" ? (
						<motion.div whileHover={{ scale: 0.8 }}>
							<IconButton href={props.url} target="_blank">
								<LinkIcon fontSize="small" color="secondary" sx={{ ml: -2 }} />
							</IconButton>
						</motion.div>
					) : null}
				</CardActions>
			</Card>
		</motion.div>
	);
};

export default Cards;
