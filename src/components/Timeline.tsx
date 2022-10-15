import WorkIcon from "@mui/icons-material/Work";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { motion } from "framer-motion";
import ITimelineProps from "../interfaces/ITimelineProps";

const TimeLine: React.FC<ITimelineProps> = (props) => {
	return (
		<Timeline position="alternate">
			{props.data.map((d, i) => {
				return (
					<TimelineItem key={i}>
						<TimelineOppositeContent sx={{ m: "auto 0" }} variant="h6">
							{d.company}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<motion.div
								whileHover={{ scale: 0.9 }}
								whileTap={{ scale: 0.9 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}
							>
								<TimelineDot color="secondary">
									<WorkIcon color="primary" />
								</TimelineDot>
							</motion.div>
							<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
						</TimelineSeparator>
						<TimelineContent sx={{ m: "auto 0" }} variant="subtitle2">
							{d.designation}
						</TimelineContent>
					</TimelineItem>
				);
			})}
		</Timeline>
	);
};

export default TimeLine;
