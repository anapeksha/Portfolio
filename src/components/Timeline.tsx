import WorkIcon from "@mui/icons-material/Work";
import { Timeline, TimelineBlip } from "react-event-timeline";

const TimeLine = () => {
	return (
		<Timeline lineColor="#62ffda">
			<TimelineBlip
				title="Software Engineer Trainee@Mindtree"
				icon={<WorkIcon />}
				iconColor="#62ffda"
				style={{
					fontFamily: "Merriweather, serif",
				}}
			></TimelineBlip>
			<TimelineBlip
				title="Software Engineer@Mindtree"
				icon={<WorkIcon />}
				iconColor="#62ffda"
				style={{ fontFamily: "Merriweather, serif" }}
			></TimelineBlip>
		</Timeline>
	);
};

export default TimeLine;
