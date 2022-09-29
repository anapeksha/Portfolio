import WorkIcon from "@mui/icons-material/Work";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import ITimelineProps from "../interfaces/ITimelineProps";

const TimeLine: React.FC<ITimelineProps> = (props) => {
	return (
		<Timeline position="alternate">
			{props.data.map((d, i) => {
				return (
					<TimelineItem key={i}>
						<TimelineOppositeContent sx={{ m: "auto 0" }} variant="body1">
							{d.company}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary">
								<WorkIcon color="primary" />
							</TimelineDot>
							<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
						</TimelineSeparator>
						<TimelineContent sx={{ m: "auto 0" }} variant="body2">
							{d.designation}
						</TimelineContent>
					</TimelineItem>
				);
			})}
		</Timeline>
	);
};

export default TimeLine;
