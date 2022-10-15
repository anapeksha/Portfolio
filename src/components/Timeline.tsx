import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/WorkOutlineOutlined";
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
		<Timeline>
			{props.data.map((d, i) => {
				return (
					<div>
						<TimelineItem>
							<TimelineOppositeContent sx={{ m: "auto 0", fontWeight: "bold" }} variant="h5">
								{d.company}
							</TimelineOppositeContent>
							<TimelineSeparator>
								<TimelineDot color="secondary">
									<BusinessIcon color="primary" />
								</TimelineDot>
								<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
							</TimelineSeparator>
							<TimelineContent></TimelineContent>
						</TimelineItem>
						{d.designation.map((desig, j) => {
							return (
								<TimelineItem key={j}>
									<TimelineSeparator>
										<TimelineDot color="secondary">
											<WorkIcon color="primary" />
										</TimelineDot>
										<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
									</TimelineSeparator>
									<TimelineContent sx={{ m: "auto 0" }} variant="subtitle2">
										{desig}
									</TimelineContent>
								</TimelineItem>
							);
						})}
					</div>
				);
			})}
		</Timeline>
	);
};

export default TimeLine;
