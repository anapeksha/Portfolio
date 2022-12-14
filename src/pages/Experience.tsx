import Timeline from "../components/Timeline";

const timelineProps = [
	{
		company: "Mindtree",
		designation: ["Software Engineer Trainee", "Software Engineer"],
	},
	
];

const Experience: React.FC = () => {
	return (
		<div id="experience">
			<Timeline data={timelineProps} />
		</div>
	);
};

export default Experience;
