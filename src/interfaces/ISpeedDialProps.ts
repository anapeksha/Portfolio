import React from "react";

interface ISpeedDialTemp {
	icon: React.ReactNode;
	name: string;
	url: string;
}

interface ISpeedDialProps {
	actions: Array<ISpeedDialTemp>;
}

export default ISpeedDialProps;
